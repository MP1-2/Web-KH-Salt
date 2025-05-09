import React, { useState, useEffect, useRef } from "react";
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
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
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
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Layout>
      <section ref={sectionRef} className="w-full flex flex-col items-center pt-20 pb-20 bg-white">
        <div className="section-container">
          <BackButton to="/" label="Back to Home" />
          
          {/* Hero Title with Red Background Banner */}
          <div className={`bg-brand-red text-white py-6 px-8 mb-10 rounded-lg shadow-md transition-all duration-1000 ${isVisible ? 'animate-fly-in-left' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
            <h1 className="text-3xl md:text-4xl font-bold tracking-wider uppercase text-center">
              Leadership Board
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto text-center mt-2">
              Meet the diverse leaders driving Khanh Hoa Salt's vision, innovation, and community impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <Card
                key={leader.name}
                className={`flex overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow transition-all duration-1000 ${isVisible ? `animate-fly-in-left animation-delay-${(index + 1) * 200}` : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}
              >
                <div className="w-1/3 bg-gray-100 flex items-center justify-center p-4">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="rounded-full border-4 border-brand-red w-24 h-24 object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h2 className="font-bold text-xl text-brand-red mb-1">{leader.name}</h2>
                  <div className="mb-2 text-sm text-gray-500 font-medium">{leader.title}</div>
                  <p className="text-gray-700 text-sm mb-3">{leader.bio}</p>
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
