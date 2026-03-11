import { NextResponse } from "next/server";

const RECIPIENT = "djsportmode@gmail.com";

export async function POST(request: Request) {
  const data = await request.json();
  const { name, email, eventType, date, location, message } = data;

  if (!name || !email || !eventType || !date) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Send via FormSubmit.co (free, no API key needed)
  // First submission triggers a confirmation email to the recipient
  const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: `New Booking Inquiry: ${eventType} — ${name}`,
      Name: name,
      Email: email,
      "Event Type": eventType,
      "Event Date": date,
      Location: location || "Not specified",
      Message: message || "No additional details",
      _template: "table",
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to send inquiry" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
