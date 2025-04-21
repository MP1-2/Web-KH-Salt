
import React from "react";
import { Globe, Award, Briefcase, Leaf } from "lucide-react";
import BackButton from "@/components/common/BackButton";

const missions = [
  {
    icon: <Globe size={40} className="mx-auto text-brand-red" />,
    title: "Global Quality Excellence",
    desc:
      "We adhere to the strictest international standards, ensuring every batch of salt leaving our facility meets both Vietnamese and global benchmarks. Our unwavering pursuit of quality creates value for customers and partners alike.",
  },
  {
    icon: <Leaf size={40} className="mx-auto text-black" />,
    title: "Environmental Responsibility",
    desc:
      "We integrate sustainable harvesting and energy-saving processes, minimizing our ecological footprint. Protecting Vietnam's unique coastal ecosystems is as important to us as producing world-class salt.",
  },
  {
    icon: <Award size={40} className="mx-auto text-brand-red" />,
    title: "Innovation & Growth",
    desc:
      "Investing in technology and people drives our ongoing innovation. We're expanding our product portfolio and seeking collaborative growth opportunities worldwide.",
  },
  {
    icon: <Briefcase size={40} className="mx-auto text-black" />,
    title: "Community Commitment",
    desc:
      "We actively support local workers and contribute to community development projects. Our company thrives alongside the families and communities who have called Khanh Hoa home for generations.",
  },
];

const MissionsAndGoals = () => {
  return (
    <section className="max-w-5xl mx-auto px-5 py-10 min-h-[70vh] flex flex-col gap-8">
      <BackButton to="/" label="Back to Home" />
      <h1 className="heading-lg text-brand-red mb-6">Our Missions &amp; Goals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {missions.map((m, i) => (
          <div
            key={i}
            className={`rounded-xl bg-white p-6 flex flex-col items-center border-2 transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-xl ${
              i % 2 === 0
                ? "border-brand-red hover:border-black"
                : "border-black hover:border-brand-red"
            } animate-fade-in`}
            style={{ minHeight: 270 }}
          >
            <div className="mb-2">{m.icon}</div>
            <h2 className="text-lg font-bold text-brand-red mb-2 text-center">{m.title}</h2>
            <p className="text-sm text-center">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionsAndGoals;
