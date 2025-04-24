import React, { useState, useEffect, useRef } from "react";
import { Globe, Award, Briefcase, Leaf } from "lucide-react";
import BackButton from "@/components/common/BackButton";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

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
    color: "text-brand-red",
  },
  {
    label: "Sustainable Initiatives",
    value: "10",
    color: "text-green-700",
  },
  {
    label: "New Product Launches",
    value: "15",
    color: "text-brand-red",
  },
  {
    label: "Community Projects",
    value: "25+",
    color: "text-green-700",
  },
];

const MissionsAndGoals = () => {
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
      <section ref={sectionRef} className="w-full flex flex-col items-center min-h-[80vh] bg-[#FAFAFA] pt-20 pb-20">
        <div className="section-container">
          <BackButton to="/" label="Back to Home" />

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className={`heading-lg text-brand-red mb-2 tracking-wider transition-all duration-1000 ${isVisible ? 'animate-fly-in-left' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`} style={{ letterSpacing: '1.5px' }}>
              OUR <span className="text-black">MISSION</span>
            </h1>
            <div className={`mx-auto w-20 h-1 bg-brand-red rounded-full mb-2 transition-all duration-1000 ${isVisible ? 'animate-fly-in-left animation-delay-200' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}></div>
            <p className={`text-lg text-gray-700 max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fly-in-left animation-delay-200' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
              Setting new standards in salt—globally recognized for quality and community impact.
            </p>
          </div>
          {/* Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12">
            {missions.map((m, i) => (
              <Card
                key={i}
                className={`rounded-xl p-7 flex flex-col items-center border border-gray-100 shadow bg-white hover:shadow-md transition-all min-h-[260px] transition-all duration-1000 ${isVisible ? `animate-fly-in-left animation-delay-${(i % 2 + 2) * 200}` : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}
              >
                <div className="mb-2">{m.icon}</div>
                <h2 className="text-lg font-bold text-brand-red mb-2 text-center">{m.title}</h2>
                <p className="text-gray-700 text-center">{m.desc}</p>
              </Card>
            ))}
          </div>
          {/* Goals Stats */}
          <div className="mb-4">
            <h2 className={`text-xl font-bold text-brand-red mb-1 text-center transition-all duration-1000 ${isVisible ? 'animate-fly-in-left animation-delay-400' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
              Company at a Glance
            </h2>
            <div className={`mx-auto w-12 h-1 bg-brand-red rounded mb-4 transition-all duration-1000 ${isVisible ? 'animate-fly-in-left animation-delay-400' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {goals.map((goal, index) => (
                <Card 
                  key={goal.label} 
                  className={`bg-[#fff] text-center p-7 shadow-md border border-gray-100 rounded-xl transition-all duration-1000 ${isVisible ? `animate-fly-in-left animation-delay-${(index + 3) * 200}` : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}
                >
                  <div className={`text-4xl font-extrabold mb-1 ${goal.color}`}>{goal.value}</div>
                  <div className="text-body-sm text-gray-700 font-medium">{goal.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MissionsAndGoals;
