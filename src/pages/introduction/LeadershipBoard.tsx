
import React from "react";
import { Linkedin } from "lucide-react";
import BackButton from "@/components/common/BackButton";

const leaders = [
  {
    name: "Pham Van Thanh",
    title: "Chief Executive Officer",
    img: "/placeholder.svg",
    bio:
      "With more than 25 years in the salt industry, Mr. Thanh has spearheaded Khanh Hoa Salt's transformation into a modern, globally competitive company. His dedication to sustainable growth and quality has driven key milestones, including major facility expansions and several award-winning product launches.",
    linkedin: "#",
  },
  {
    name: "Nguyen Thi Hoa",
    title: "Chief Financial Officer",
    img: "/placeholder.svg",
    bio:
      "Ms. Hoa, our accomplished CFO, brings rigorous financial management and strategic foresight to our executive team. Her leadership in financial planning and risk management has helped secure the company’s robust position in international trade.",
    linkedin: "#",
  },
  {
    name: "Tran Dinh Quang",
    title: "Head of Operations",
    img: "/placeholder.svg",
    bio:
      "Mr. Quang oversees quality assurance and daily operations at Khanh Hoa Salt. His innovative mindset and attention to safety and efficiency have led to numerous process improvements and first-in-industry certifications.",
    linkedin: "#",
  },
  {
    name: "Le Thi Mai",
    title: "HR Director",
    img: "/placeholder.svg",
    bio:
      "Ms. Mai drives our talent strategy, focusing on empowering employees and building a collaborative, high-performance culture. She has championed many community and staff wellbeing initiatives.",
    linkedin: "#",
  },
];

const LeadershipBoard = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 min-h-[70vh] flex flex-col gap-8">
      <BackButton to="/" label="Back to Home" />
      <h1 className="heading-lg text-brand-red mb-8">Leadership Board</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaders.map((leader, idx) => (
          <div
            key={leader.name}
            className="rounded-lg bg-black text-white shadow transition-all duration-200 p-6 flex flex-col items-center hover:shadow-[0_8px_16px_0_rgba(234,56,76,0.5)] hover:-translate-y-1"
            style={{ borderRadius: 8, minHeight: 420 }}
          >
            <img
              src={leader.img}
              alt={leader.name}
              className="rounded-full border-4 border-brand-red w-32 h-32 object-cover mb-3"
              style={{ width: 120, height: 120 }}
            />
            <h2 className="font-bold text-xl text-brand-red mb-1" style={{fontSize: 20}}>{leader.name}</h2>
            <div className="mb-2 text-sm text-gray-300">{leader.title}</div>
            <p className="text-white text-sm mb-3">{leader.bio}</p>
            {leader.linkedin && (
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand-red hover:underline mt-auto"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipBoard;
