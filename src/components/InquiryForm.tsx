"use client";

import { useState, type FormEvent } from "react";

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Private Party",
  "Festival / Club Night",
  "Other",
];

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formsubmit.co/ajax/djsportmode@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const data = await res.json();
      if (data.success === "true") {
        setSubmitted(true);
      } else {
        throw new Error();
      }
    } catch {
      setError(
        "Something went wrong. Please try again or email djsportmode@gmail.com directly."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="book" className="relative bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6 py-24 sm:py-32">
        <p className="text-sm uppercase tracking-[0.2em] text-[#e040fb] mb-4">
          Booking
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          Let&apos;s make it happen
        </h2>
        <p className="text-zinc-500 text-lg mb-12">
          Tell me about your event and I&apos;ll get back to you within 24
          hours.
        </p>

        {submitted ? (
          <div className="text-center py-20 border border-white/5 rounded-2xl">
            <svg
              width="48"
              height="48"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#e040fb"
              strokeWidth="1.5"
              className="mx-auto mb-4"
            >
              <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Inquiry Sent!</h3>
            <p className="text-zinc-500">
              Thanks for reaching out. I&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="_subject" value="New Booking Inquiry from sportmode.ca" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/10 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#e040fb] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/10 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#e040fb] transition-colors"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="eventType" className="block text-sm text-zinc-400 mb-2">
                Event Type
              </label>
              <select
                id="eventType"
                name="Event Type"
                required
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/10 text-white focus:outline-none focus:border-[#e040fb] transition-colors"
              >
                <option value="" className="bg-[#0a0a0a]">
                  Select event type
                </option>
                {eventTypes.map((type) => (
                  <option key={type} value={type} className="bg-[#0a0a0a]">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm text-zinc-400 mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="Event Date"
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/10 text-white focus:outline-none focus:border-[#e040fb] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm text-zinc-400 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="Location"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/10 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#e040fb] transition-colors"
                  placeholder="Venue or city"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">
                Tell me about your event
              </label>
              <textarea
                id="message"
                name="Message"
                rows={4}
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/10 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#e040fb] transition-colors resize-none"
                placeholder="Vibe, guest count, must-play songs, anything else..."
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <div className="pt-4">
              <button
                type="submit"
                disabled={sending}
                className="w-full sm:w-auto px-12 py-4 rounded-full bg-gradient-to-r from-[#e040fb] to-[#7c4dff] text-white font-medium hover:opacity-90 transition-opacity cursor-pointer text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send Inquiry"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
