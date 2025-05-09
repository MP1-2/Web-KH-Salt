import React, { useState, useEffect, useRef } from "react";
import BackButton from "@/components/common/BackButton";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const partners = [
  {
    name: "Vietnam Retail Co.",
    description:
      "A leading retail chain, collaborating on distribution and marketing for over a decade.",
    logo: "/placeholder.svg",
    link: "#",
  },
  {
    name: "Asia Export Group",
    description:
      "Key export partner enabling our presence in 15+ countries and seamless global logistics.",
    logo: "/placeholder.svg",
    link: "#",
  },
  {
    name: "Saigon Supermarkets",
    description:
      "Major retail partner with prominent shelf space and promotional events in southern Vietnam.",
    logo: "/placeholder.svg",
    link: "#",
  },
  {
    name: "Northern Foods Ltd.",
    description:
      "Distributor for industrial grades, ensuring a steady supply to northern manufacturers.",
    logo: "/placeholder.svg",
    link: "#",
  },
  {
    name: "Pacific Sea Imports",
    description:
      "Supplies premium-grade salts to luxury restaurant and culinary clients across Asia-Pacific.",
    logo: "/placeholder.svg",
    link: "#",
  },
  {
    name: "Metro Wholesale",
    description:
      "Supports B2B channels, distributing in bulk to hotels and caterers nationwide.",
    logo: "/placeholder.svg",
    link: "#",
  },
];

const Partners = () => {
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
      <section ref={sectionRef} className="w-full flex flex-col items-center min-h-[70vh] bg-white pt-20 pb-20">
        <div className="section-container">
          <BackButton to="/" label="Back to Home" />
          <h1 className={`heading-lg text-brand-red mb-4 text-center transition-all duration-1000 ${isVisible ? 'animate-fly-in-left' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>Partners</h1>
          <p className={`text-body max-w-2xl mx-auto text-center mb-7 transition-all duration-1000 ${isVisible ? 'animate-fly-in-left animation-delay-200' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
            We proudly collaborate with industry-leading partners who help deliver Khanh Hoa Salt products and values to every region and continent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {partners.map((p, index) => (
              <Card
                key={p.name}
                className={`flex flex-col items-center bg-white/90 rounded-xl p-6 hover:border-brand-red border-transparent border shadow-lg transition-all duration-1000 ${isVisible ? `animate-fly-in-left animation-delay-${(index + 2) * 200}` : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}
              >
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center w-full mb-2"
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="mb-2 grayscale group-hover:grayscale-0 group-hover:border-brand-red border transition-all duration-200"
                    style={{ width: 140, height: 60, objectFit: "contain" }}
                  />
                </a>
                <div className="font-bold text-brand-red mb-1 text-center">{p.name}</div>
                <div className="text-gray-700 text-sm text-center" style={{ fontSize: 14 }}>
                  {p.description}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
