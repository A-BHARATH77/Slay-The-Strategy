"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonials = [
  {
    name: "Prassana",
    role: "Founder, Prassana Brands",
    description:
      "Working with Slay the Strategy was seamless. Their process is structured, focused, and respectful of time, which made collaboration easy and effective.",
    img: "https://img.freepik.com/free-photo/brunette-girl-posing_23-2148108748.jpg",
    rating: 5,
  },
  {
    name: "JZ Lake View",
    role: "Manager, JZ Lake View",
    description:
      "Slay the Strategy brought a level of clarity to our project that made the entire process feel smooth and well organised. Every stage was handled with care.",
    img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
    rating: 5,
  },
  {
    name: "Yogita Dalvi",
    role: "Director, KDBS",
    description:
      "From strategy to execution, everything was handled with precision and care. The final product feels refined and built to last.",
    img: "https://img.freepik.com/free-photo/smiling-asian-woman_23-2147766303.jpg",
    rating: 5,
  },
  {
    name: "Brew Merchant Café",
    role: "Owner, Brew Merchant Café & Bar",
    description:
      "Vishishta just gets it — she brings clarity, creativity, and structure to every campaign. Everything feels intentional and aligned with our brand.",
    img: "https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg",
    rating: 5,
  },
  {
    name: "Echo Bowl",
    role: "Founder, Echo Bowl",
    description:
      "The Social Moodboard team has helped us show up with consistency, edge, and style. Vishishta leads with insight and never delivers anything mediocre.",
    img: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg",
    rating: 4,
  },
  {
    name: "Chill House Interiors",
    role: "Owner, Chill House Interiors",
    description:
      "We came for content support and stayed for the energy, professionalism, and genuine passion. Vishishta's strategies are sharp and rooted in what actually works.",
    img: "https://img.freepik.com/premium-photo/woman-wearing-glasses-yellow-shirt_911060-133057.jpg",
    rating: 5,
  },
  {
    name: "Chill House Interiors",
    role: "Owner, Chill House Interiors",
    description:
      "We came for content support and stayed for the energy, professionalism, and genuine passion. Vishishta's strategies are sharp and rooted in what actually works.",
    img: "https://img.freepik.com/premium-photo/woman-wearing-glasses-yellow-shirt_911060-133057.jpg",
    rating: 5,
  },
];

// ── Star rating component ──
const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1 mb-4">
    {[1, 2, 3, 4, 5].map((i) => (
      <span
        key={i}
        className={`text-lg ${i <= count ? "text-yellow-400" : "text-[#f7f2e6]/20"}`}
      >
        ★
      </span>
    ))}
  </div>
);

// ── Single card ──
const ReviewCard = ({ name, role, description, img, rating }: any) => (
  <figure className="w-72 flex-shrink-0 rounded-2xl bg-[#fdf8ee] border border-[#e8dfc8] p-6 flex flex-col justify-between shadow-sm mx-3">
    <div>
      <Stars count={rating} />
      <blockquote className="text-[#526855]/85 text-sm leading-relaxed font-['Gilda_Display']">
        &ldquo;{description}&rdquo;
      </blockquote>
    </div>
    <div className="flex items-center gap-3 mt-6">
      <div className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0 bg-[#516856]/10">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e: any) => {
            e.target.style.display = "none";
          }}
        />
      </div>
      <div>
        <p className="text-sm font-semibold text-[#f7f2e6] font-['Gilda_Display']">{name}</p>
        <p className="text-xs text-[#f7f2e6]/55 font-['Gilda_Display']">{role}</p>
      </div>
    </div>
  </figure>
);

// ── Main component ──
export default function Clients() {
  return (
    <section className="bg-[#526855] py-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <div className="inline-flex mb-5">
          <span className="px-4 py-1.5 text-xs font-medium text-[#f7f2e6] border border-[#516856]/30 rounded-full font-['Gilda_Display']">
            Testimonials
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#f7f2e6] font-['Gilda_Display'] leading-tight max-w-xl mx-auto">
          Trusted by teams who <span className="italic">value quality.</span>
        </h2>
      </div>

      {/* Static cards row */}
      <div className="flex overflow-x-auto py-4 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {testimonials.map((t, index) => (
          <div key={t.name} className={index === 0 ? "pl-4 sm:pl-8 md:pl-16 lg:pl-24" : ""}>
            <ReviewCard {...t} />
          </div>
        ))}
      </div>

      {/* Bottom stat */}
      <div className="text-center mt-10">
        <p className="text-sm text-[#f7f2e6]/65 font-['Gilda_Display']">
          <span className="text-[#f7f2e6] font-semibold">+200</span>{" "}
          projects delivered across growing companies.
        </p>
      </div>
    </section>
  );
}