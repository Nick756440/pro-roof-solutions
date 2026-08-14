"use client";

import { useState } from "react";

const services = [
  {
    title: "Roof Replacement",
    text: "Premium residential and commercial roofing systems installed with craftsmanship, clear communication, and long-term protection in mind.",
  },
  {
    title: "Storm Damage Restoration Assistance",
    text: "Fast inspections, damage documentation, and insurance-support guidance after hail or wind damage.",
  },
  {
    title: "Siding Replacement & Gutter Systems",
    text: "Durable siding and high-performance gutter systems designed to improve curb appeal, water control, and long-term exterior protection.",
  },
];

const trustItems = [
  "Licensed and Insured",
  "Free inspection of the property's roof system and exterior elevations",
  "Storm Restoration Assistance",
  "Manufacturer-backed systems",
  "10-year workmanship warranty",
  "Flexible financing available",
  "Referral rewards program",
];

const reasons = [
  "Top-rated Maryland contractor",
  "Trusted by homeowners across Maryland",
  "Proven, warranty-backed workmanship",
  "Integrity, credibility, and reliability",
  "Residential and commercial expertise",
  "Detailed inspections and honest recommendations",
];

const reviews = [
  "Professional, responsive, and easy to work with from inspection through completion.",
  "They made the storm restoration process clear and handled everything professionally.",
  "High-quality workmanship and great communication from start to finish.",
];

export default function Home() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  function submit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("New Pro Roof Solutions Website Lead");
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nProject Details:\n${form.message}`
    );
    window.location.href = `mailto:nick@proroofsolutions.net?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <div>
            <div className="text-lg font-black tracking-tight">
              PRO ROOF <span className="text-red-700">SOLUTIONS</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 sm:text-xs">
              Roofing • Storm Damage • Exteriors
            </div>
          </div>

          <nav className="hidden gap-7 text-sm font-semibold lg:flex">
            <a href="#services" className="hover:text-red-700">Services</a>
            <a href="#why" className="hover:text-red-700">Why Us</a>
            <a href="#reviews" className="hover:text-red-700">Reviews</a>
            <a href="#contact" className="hover:text-red-700">Contact</a>
          </nav>

          <a
            href="tel:+14435042424"
            className="rounded-xl bg-zinc-950 px-4 py-3 text-xs font-bold text-white transition hover:bg-red-700 sm:text-sm"
          >
            Call / Text
          </a>
        </div>
      </header>

      <section className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-zinc-300">
              Maryland Exterior Remodeling & Restoration
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Roofing and exterior work built on trust, reliability, and lasting protection.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Pro Roof Solutions provides Maryland homeowners and businesses with roof replacement,
              storm damage restoration assistance, siding replacement, gutter systems, and full exterior improvements.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-xl bg-red-700 px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-white"
              >
                Free Quote / Storm Inspection
              </a>
              <a
                href="#services"
                className="rounded-xl border border-white/20 px-6 py-4 text-center text-sm font-black uppercase tracking-wide"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="text-yellow-400">★★★★★</span> 5-Star Reviews
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Licensed & Insured</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Warranty-Backed Work</span>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="rounded-[1.5rem] bg-white p-6 text-zinc-950">
              <div className="text-sm font-black uppercase tracking-[0.22em] text-red-700">
                Free Quote / Storm Damage Inspection
              </div>
              <h2 className="mt-3 text-2xl font-black">Tell us how we can help.</h2>

              <div className="mt-6 space-y-4">
                <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-red-700" />
                <input required placeholder="Phone" inputMode="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-red-700" />
                <input placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-red-700" />
                <textarea placeholder="Tell us about your roof or exterior project" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-red-700" />
              </div>

              <button type="submit" className="mt-5 w-full rounded-xl bg-zinc-950 px-5 py-4 text-sm font-black uppercase tracking-wide text-white hover:bg-red-700">
                Request Free Quote
              </button>

              <p className="mt-4 text-xs leading-5 text-zinc-500">
                Free inspections. No pressure. Honest recommendations for Maryland homeowners and businesses.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="border-b border-zinc-200">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item} className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-sm font-bold">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-red-700">Services</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
          Premium exterior services built around your property.
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[2rem] border border-zinc-200 p-7 shadow-sm">
              <div className="h-1.5 w-16 rounded-full bg-red-700" />
              <h3 className="mt-6 text-2xl font-black">{service.title}</h3>
              <p className="mt-4 leading-7 text-zinc-600">{service.text}</p>
              <a href="#contact" className="mt-6 inline-block font-black uppercase tracking-wide hover:text-red-700">
                Request a quote
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="why" className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-700">Why Pro Roof Solutions</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              A premium brand delivering premium services you can trust.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-2xl border border-zinc-200 bg-white p-6 font-bold shadow-sm">
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-zinc-200 bg-zinc-50"><div className="mx-auto max-w-7xl px-6 py-20"><p className="text-sm font-black uppercase tracking-[0.22em] text-red-700">Completed Projects</p><h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Completed roofing projects across Maryland.</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">A selection of completed Pro Roof Solutions roof replacements, including larger multi-plane roof systems and residential projects.</p><div className="mt-10 overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm"><div className="h-[420px] overflow-hidden md:h-[560px]"><img src="/projects/roof-5.webp" alt="Featured completed Pro Roof Solutions roofing projects" className="h-[200%] w-full object-cover object-top"/></div><div className="p-7"><p className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Featured Roofs</p><h3 className="mt-2 text-2xl font-black">Larger & Complex Roof Systems</h3><p className="mt-3 leading-7 text-zinc-600">Drone views highlighting completed larger residential roofs, complex hips, valleys, ridges, and multi-plane roofing systems.</p></div></div><div className="mt-8"><div className="mb-5"><p className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Photo Gallery</p><h3 className="mt-2 text-2xl font-black">More Completed Roofs</h3></div><div className="h-[420px] overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm md:h-[560px]"><img src="/projects/roof-5.webp" alt="Gallery of completed Pro Roof Solutions roof replacements" className="h-[200%] w-full -translate-y-1/2 object-cover object-bottom"/></div></div></div></section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-red-700">5-Star Reviews</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Trusted by homeowners across Maryland.</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review} className="rounded-[2rem] border border-zinc-200 p-7 shadow-sm">
              <div className="text-xl text-yellow-400">★★★★★</div>
              <p className="mt-4 leading-7 text-zinc-600">{review}</p>
              <p className="mt-6 text-sm font-black uppercase tracking-wide">Customer Review</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-red-700">Simple Process</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">A clear path from inspection to completion.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              ["01", "Schedule a Free Inspection", "Book a no-pressure inspection and get a clear assessment of your roof or exterior."],
              ["02", "Review Your Options", "We explain materials, scope, warranties, financing, and storm-restoration options."],
              ["03", "Get the Job Done Right", "Our team completes the project with quality workmanship, communication, and clean final results."],
            ].map(([num, title, text]) => (
              <article key={num} className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-black tracking-[0.22em] text-red-700">{num}</p>
                <h3 className="mt-4 text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-zinc-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">Contact</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Ready for a free quote or storm damage inspection?
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Get honest recommendations and responsive support for roofing, storm restoration, siding, gutters, and complete exterior improvements.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">Call or Text</p>
            <a href="tel:+14435042424" className="mt-2 block text-3xl font-black hover:text-red-500">(443) 504-2424</a>

            <p className="mt-8 text-xs uppercase tracking-[0.22em] text-zinc-400">Email</p>
            <a href="mailto:nick@proroofsolutions.net" className="mt-2 block text-xl font-bold hover:text-red-500">
              nick@proroofsolutions.net
            </a>

            <a href="sms:+14435042424" className="mt-8 inline-flex w-full justify-center rounded-xl bg-red-700 px-6 py-4 text-sm font-black uppercase tracking-wide">
              Text Pro Roof Solutions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
