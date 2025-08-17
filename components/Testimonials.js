"use client";
import Image from "next/image";
import testimonial1 from "@/assets/Images/testimonial1.webp";
import testimonial2 from "@/assets/Images/testimonial2.webp";
import testimonial3 from "@/assets/Images/testimonial3.webp";


const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager, Reddit",
    image: testimonial1,
    quote:
      "Working with this platform completely transformed my financial planning. The clarity and expertise provided are unmatched.",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer, Databricks",
    image: testimonial2,
    quote:
      "I was blown away by how simple and intuitive the process was. I feel confident making big equity decisions now.",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer, ThoughtSpot",
    image: testimonial3,
    quote:
      "The team really understands startup employees. Their guidance gave me peace of mind during my IPO journey.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-zinc-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-50">
            What our Students say
          </h2>
          <p className="mt-4 text-lg text-amber-60 max-w-2xl mx-auto">
            Trusted by employees from top startups worldwide — here’s how we’ve
            helped them with their equity journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-neutral-50 rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col"
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                “{t.quote}”
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-[40px] h-[40px]">
                    <Image
                    src={t.image}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="w-full h-full rounded-full"
                    />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
