
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
    <section className="w-full flex flex-col items-center min-h-[80vh] pt-6 pb-16 bg-white">
      <div className="section-container w-full max-w-6xl">
        <BackButton to="/introduction" label="Back to Introduction" />

        {/* Hero Title */}
        <div className="text-center mb-8">
          <h1 className="heading-lg text-brand-red mb-2 tracking-wider" style={{ letterSpacing: '1.5px' }}>
            LEADERSHIP <span className="text-black">BOARD</span>
          </h1>
          <div className="mx-auto w-20 h-1 bg-brand-red rounded-full mb-2"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Meet the diverse leaders driving Khanh Hoa Salt’s vision, innovation, and community impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
          {leaders.map((leader) => (
            <Card
              key={leader.name}
              className="rounded-2xl bg-white text-black border border-gray-100 shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition duration-200"
            >
              <img
                src={leader.img}
                alt={leader.name}
                className="rounded-full border-4 border-brand-red w-24 h-24 object-cover mb-3 shadow"
              />
              <h2 className="font-bold text-xl text-brand-red mb-1 text-center">{leader.name}</h2>
              <div className="mb-2 text-sm text-gray-500 text-center font-medium">{leader.title}</div>
              <p className="text-gray-700 text-sm mb-3 text-center">{leader.bio}</p>
              {leader.linkedin ? (
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand-red font-semibold hover:underline mt-auto"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipBoard;
