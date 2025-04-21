
import React from "react";
import { Linkedin } from "lucide-react";
import BackButton from "@/components/common/BackButton";
import { Card } from "@/components/ui/card";

const leaders = [
  {
    name: "Pham Van Thanh",
    title: "Chief Executive Officer",
    img: "/placeholder.svg",
    bio:
      "With 25+ years in salt, Mr. Thanh led Khanh Hoa Salt’s transformation into a globally competitive enterprise. His passion for sustainable growth has delivered major expansions and award-winning launches.",
    linkedin: "#",
  },
  {
    name: "Nguyen Thi Hoa",
    title: "Chief Financial Officer",
    img: "/placeholder.svg",
    bio:
      "Ms. Hoa’s sharp financial leadership secures international trade for the company. Her work in financial planning and risk management keeps operations robust and future-ready.",
    linkedin: "#",
  },
  {
    name: "Tran Dinh Quang",
    title: "Head of Operations",
    img: "/placeholder.svg",
    bio:
      "Mr. Quang ensures quality and efficiency in our daily operations. His innovations and focus on safety have achieved first-in-industry certifications for our processes.",
    linkedin: "#",
  },
  {
    name: "Le Thi Mai",
    title: "HR Director",
    img: "/placeholder.svg",
    bio:
      "Ms. Mai powers our talent strategy and a collaborative culture. She’s championed staff wellbeing and community programs that shape our organization.",
    linkedin: "#",
  },
];

const LeadershipBoard = () => {
  return (
    <section className="section-container py-14 min-h-[80vh] flex flex-col gap-8">
      <BackButton to="/" label="Back to Home" />
      <h1 className="heading-lg text-brand-red mb-3 text-center">Leadership Board</h1>
      <p className="text-body max-w-2xl mx-auto text-center mb-8">
        Meet the diverse leaders driving Khanh Hoa Salt’s vision, innovation, and commitment—each bringing a unique legacy and leadership story.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {leaders.map((leader) => (
          <Card
            key={leader.name}
            className="rounded-2xl bg-white/90 text-black shadow-lg p-7 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-xl animate-fade-in"
          >
            <img
              src={leader.img}
              alt={leader.name}
              className="rounded-full border-4 border-brand-red w-24 h-24 object-cover mb-3 shadow"
            />
            <h2 className="font-bold text-lg text-brand-red mb-1">{leader.name}</h2>
            <div className="mb-2 text-sm text-gray-500 text-center">{leader.title}</div>
            <p className="text-gray-700 text-sm mb-3 text-center">{leader.bio}</p>
            {leader.linkedin ? (
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand-red font-medium hover:underline mt-auto"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LeadershipBoard;
