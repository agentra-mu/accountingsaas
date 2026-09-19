import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "waitlist.json");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type WaitlistSignup = {
  name: string;
  email: string;
  firmName: string;
  createdAt: string;
};

async function readSignups(): Promise<WaitlistSignup[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as WaitlistSignup[];
  } catch {
    return [];
  }
}

async function writeSignups(signups: WaitlistSignup[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(signups, null, 2), "utf-8");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, firmName } = (body ?? {}) as Record<string, unknown>;

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json({ error: "Enter your name." }, { status: 400 });
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const signups = await readSignups();

    if (signups.some((s) => s.email === normalizedEmail)) {
      return NextResponse.json({ ok: true, alreadyJoined: true });
    }

    signups.push({
      name: name.trim(),
      email: normalizedEmail,
      firmName: typeof firmName === "string" ? firmName.trim() : "",
      createdAt: new Date().toISOString(),
    });

    await writeSignups(signups);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to record waitlist signup", err);
    return NextResponse.json(
      { error: "Something went wrong on our end. Try again shortly." },
      { status: 500 }
    );
  }
}
