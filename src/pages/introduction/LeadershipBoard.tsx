
import React from "react";
import { Linkedin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";
import { Card } from "@/components/ui/card";

const leaders = [
  {
    name: "Pham Van Thanh",
    title: "Chief Executive Officer",
    img: "/placeholder.svg",
    bio:
      "With 25+ years in salt, Mr. Thanh led Khanh Hoa Salt's transformation into a globally competitive enterprise. His passion for sustainable growth has delivered major expansions and award-winning launches.",
    linkedin: "#",
  },
  {
    name: "Nguyen Thi Hoa",
    title: "Chief Financial Officer",
    img: "/placeholder.svg",
    bio:
      "Ms. Hoa's sharp financial leadership secures international trade for the company. Her work in financial planning and risk management keeps operations robust and future-ready.",
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
      "Ms. Mai powers our talent strategy and a collaborative culture. She's championed staff wellbeing and community programs that shape our organization.",
    linkedin: "#",
  },
];

const LeadershipBoard = () => {
  return (
    <Layout>
      <section className="w-full py-10 bg-white">
        <div className="section-container max-w-6xl mx-auto">
          <BackButton label="Back to Home" />
          {/* Hero Title with Blue Background Banner */}
          <div className="bg-[#1A237E] text-white py-6 px-8 mb-10 shadow-md">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wider uppercase text-center">
              Leadership Board
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto text-center mt-2">
              Meet the diverse leaders driving Khanh Hoa Salt's vision, innovation, and community impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader) => (
              <Card
                key={leader.name}
                className="flex overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow"
                style={{ background: "#f8fafd" }}
              >
                <div className="w-1/3 bg-[#dbeafe] flex items-center justify-center p-4">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="border-4 border-brand-red w-24 h-24 object-cover bg-white"
                    style={{ borderRadius: 0 }}
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h2 className="font-bold text-xl text-brand-red mb-1">{leader.name}</h2>
                  <div className="mb-2 text-sm text-black font-medium">{leader.title}</div>
                  <p className="text-black text-sm mb-3">{leader.bio}</p>
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
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LeadershipBoard;
