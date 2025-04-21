
import React from "react";
import { Globe, Award, Briefcase, Leaf } from "lucide-react";
import BackButton from "@/components/common/BackButton";
import { Card } from "@/components/ui/card";

const missions = [
  {
    icon: <Globe size={40} className="mx-auto text-brand-red" />,
    title: "Global Quality Excellence",
    desc:
      "We adhere to strict international standards, ensuring every batch of salt meets Vietnamese and global benchmarks. Our pursuit of uncompromised quality creates value for customers and partners worldwide.",
  },
  {
    icon: <Leaf size={40} className="mx-auto text-black" />,
    title: "Environmental Responsibility",
    desc:
      "We integrate sustainable harvesting and energy-saving processes, minimizing our footprint. Protecting the unique Vietnamese coastal ecosystem is as important to us as salt itself.",
  },
  {
    icon: <Award size={40} className="mx-auto text-brand-red" />,
    title: "Innovation & Growth",
    desc:
      "Investment in technology and people drives our future. We’re expanding our product range and looking for new opportunities to grow together with partners worldwide.",
  },
  {
    icon: <Briefcase size={40} className="mx-auto text-black" />,
    title: "Community Commitment",
    desc:
      "We actively support local workers and contribute to the community. Our company thrives alongside the families and communities who have called Khanh Hoa home for generations.",
  },
];

const goals = [
  {
    label: "Export Countries",
    value: "30+",
    color: "text-brand-red"
  },
  {
    label: "Sustainable Initiatives",
    value: "10",
    color: "text-green-700"
  },
  {
    label: "New Product Launches",
    value: "15",
    color: "text-brand-red"
  },
  {
    label: "Community Projects",
    value: "25+",
    color: "text-green-700"
  }
];

const MissionsAndGoals = () => {
  return (
    <section className="section-container py-14 min-h-[80vh] flex flex-col gap-12">
      <BackButton to="/" label="Back to Home" />
      <h1 className="heading-lg text-brand-red mb-1">Our Missions &amp; Goals</h1>
      <p className="text-body max-w-2xl mx-auto text-center mb-8">We strive to set new benchmarks in quality, sustainability, and community commitment for Vietnamese salt—driven by purpose beyond profit.</p>
      {/* Missions cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-8">
        {missions.map((m, i) => (
          <Card
            key={i}
            className={`rounded-xl p-7 flex flex-col items-center border-none shadow-lg bg-white/80 hover:scale-105 transition-transform hover:shadow-xl animate-fade-in`}
            style={{ minHeight: 270 }}
          >
            <div className="mb-2">{m.icon}</div>
            <h2 className="text-xl font-bold text-brand-red mb-2 text-center">{m.title}</h2>
            <p className="text-sm text-center text-gray-700">{m.desc}</p>
          </Card>
        ))}
      </div>
      {/* Goals stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {goals.map((goal) => (
          <Card key={goal.label} className="text-center p-7 shadow-md border-none bg-white/95">
            <div className={`text-4xl font-extrabold mb-1 ${goal.color}`}>{goal.value}</div>
            <div className="text-body-sm text-gray-600">{goal.label}</div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MissionsAndGoals;
