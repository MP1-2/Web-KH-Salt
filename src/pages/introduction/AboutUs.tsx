
import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, Globe, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Years in Business", value: "20+", icon: Briefcase },
  { label: "Employees", value: "500+", icon: Users },
  { label: "Countries Exported", value: "30+", icon: Globe },
  { label: "Industry Awards", value: "12", icon: Award },
];

const images = [
  { src: "/placeholder.svg", alt: "Salt Production Facility", caption: "Modern Salt Production Facility" },
  { src: "/placeholder.svg", alt: "Team Members", caption: "Dedicated Team at Khanh Hoa Salt" },
  { src: "/placeholder.svg", alt: "Salt Harvesting", caption: "Traditional Salt Harvesting" },
];

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[80vh] px-5 py-8 md:py-12 max-w-5xl mx-auto flex flex-col gap-12">
      <header className="mb-4">
        <h1 className="heading-lg text-brand-red mb-2">About Us</h1>
        <nav className="text-sm flex gap-4 mb-2">
          <a href="#history" className="text-brand-red underline-offset-4 hover:underline">Our History</a>
          <a href="#values" className="text-brand-red underline-offset-4 hover:underline">Our Values</a>
        </nav>
      </header>

      <div id="history" className="flex flex-col md:flex-row gap-8">
        {/* Images Gallery Left */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex gap-2 md:gap-4">
            <div className="w-1/2">
              <img src={images[0].src} alt={images[0].alt} className="rounded-lg w-full h-auto object-cover" style={{maxHeight: 250}} />
              <div className="italic text-xs mt-1 text-center">{images[0].caption}</div>
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <img src={images[1].src} alt={images[1].alt} className="rounded-lg w-full h-auto object-cover" style={{maxHeight: 110}} />
              <img src={images[2].src} alt={images[2].alt} className="rounded-lg w-full h-auto object-cover" style={{maxHeight: 110}} />
            </div>
          </div>
        </div>
        {/* Text Right */}
        <div className="flex-[2] flex flex-col gap-3 text-body">
          <h2 className="heading-md text-brand-red mb-1">Our History</h2>
          <p>
            Founded more than two decades ago in the sun-baked heart of Khanh Hoa province, our company has grown from a modest salt cooperative into one of Vietnam's most innovative and respected salt producers. From the very beginning, our vision has been anchored in blending traditional Vietnamese salt-harvesting methods with modern production technologies. 
          </p>
          <p>
            Through years of dedication, adaptability, and investment in human capital, we've reached significant milestones: the expansion of our production facility in 2008, the launch of our export division in 2013, and winning the prestigious National Quality Award in 2022. 
          </p>
          <p>
            Today, our current operations span the entire supply chain, integrating sustainable harvesting, advanced purification, and rigorous quality assurance. Our salt products reach kitchens, factories, and markets in over 30 countries, but our roots and values remain firmly in Vietnam.
          </p>
        </div>
      </div>

      {/* Key Stats Box */}
      <div className="bg-black rounded-xl flex flex-wrap justify-between items-center gap-5 p-6 md:p-8" style={{borderRadius: 16}}>
        {stats.map((stat, idx) => (
          <div key={stat.label} className="flex flex-col items-center flex-1 min-w-[120px]">
            <stat.icon className="text-brand-red mb-1" size={32} />
            <span className="text-2xl text-white font-bold">{stat.value}</span>
            <span className="text-xs text-zinc-400">{stat.label}</span>
          </div>
        ))}
      </div>

      <div id="values" className="flex flex-col gap-2 mt-2">
        <h2 className="heading-md text-brand-red mb-1">Our Values</h2>
        <p>
          At Khanh Hoa Salt, our work is underpinned by values that have guided us for twenty years: a commitment to quality, deep respect for our people and communities, environmental responsibility, and a drive for innovation. We foster an inclusive workplace, invest in sustainable development, and uphold business ethics in everything we do. Our goal is to deliver value not only to our customers and partners, but also to the communities who have supported us from our inception.
        </p>
        <p>
          Our reputation is built on trust and product purity, and we continue to set the benchmark for excellence in the salt industry in Vietnam and across Asia.
        </p>
      </div>

      {/* CTA */}
      <div>
        <Button className="mt-4 bg-brand-red text-white px-6 py-3 text-lg rounded-lg hover:scale-105 transition-transform" onClick={() => navigate('/contact')}>
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;
