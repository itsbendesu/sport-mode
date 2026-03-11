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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to an API route or email service
    setSubmitted(true);
  }

  return (
    <section id="book" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Book <span className="gradient-text">Your Event</span>
          </h2>
          <p className="text-zinc-500">
            Tell me about your event and I&apos;ll get back to you within 24
            hours.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16 rounded-2xl border border-white/5 bg-white/[0.02]">
            <div className="text-4xl mb-4">
              <svg
                width="48"
                height="48"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#e040fb"
                strokeWidth="1.5"
                className="mx-auto"
              >
                <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Inquiry Sent!</h3>
            <p className="text-zinc-500">
              Thanks for reaching out. I&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-zinc-400 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#e040fb]/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-zinc-400 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#e040fb]/50 transition-colors"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="eventType"
                className="block text-sm text-zinc-400 mb-1.5"
              >
                Event Type
              </label>
              <select
                id="eventType"
                name="eventType"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#e040fb]/50 transition-colors"
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

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm text-zinc-400 mb-1.5"
                >
                  Event Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#e040fb]/50 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm text-zinc-400 mb-1.5"
                >
                  Expected Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#e040fb]/50 transition-colors"
                  placeholder="~100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-zinc-400 mb-1.5"
              >
                Tell me about your event
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#e040fb]/50 transition-colors resize-none"
                placeholder="Venue, vibe, must-play songs, anything else..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#e040fb] to-[#7c4dff] text-white font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              Send Inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
