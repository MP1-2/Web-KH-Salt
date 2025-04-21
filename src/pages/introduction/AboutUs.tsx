
import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, Globe, Award, Briefcase } from "lucide-react";
import BackButton from "@/components/common/BackButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
    <section className="section-container py-14 min-h-[80vh] flex flex-col gap-12">
      <BackButton to="/" label="Back to Home" />
      {/* Title & Navigation */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-2">
        <h1 className="heading-lg text-brand-red">About Us</h1>
        <nav className="text-sm flex flex-row gap-4">
          <a href="#history" className="text-brand-red font-semibold underline-offset-4 hover:underline transition">Our History</a>
          <a href="#values" className="text-brand-red font-semibold underline-offset-4 hover:underline transition">Our Values</a>
        </nav>
      </div>
      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-fade-in">
        {/* Gallery Card */}
        <Card className="bg-white/70 rounded-2xl border-none shadow-lg flex flex-col min-h-[310px] justify-between">
          <div className="flex flex-row gap-3 p-6 pb-2">
            <img src={images[0].src} alt={images[0].alt} className="rounded-xl w-1/2 object-cover shadow-lg max-h-44" />
            <div className="flex flex-col gap-3 w-1/2">
              <img src={images[1].src} alt={images[1].alt} className="rounded-xl object-cover shadow max-h-20" />
              <img src={images[2].src} alt={images[2].alt} className="rounded-xl object-cover shadow max-h-20" />
            </div>
          </div>
          <div className="flex py-3 px-6 gap-2 flex-wrap justify-between">
            {images.map((img, i) => (
              <div key={img.alt} className="italic text-xs text-center text-gray-600 w-1/3">{img.caption}</div>
            ))}
          </div>
        </Card>
        {/* Text Card */}
        <Card className="bg-white/70 rounded-2xl border-none shadow-lg flex flex-col justify-center p-8 min-h-[310px]">
          <h2 id="history" className="heading-md text-brand-red mb-3">Our History</h2>
          <p className="mb-2 text-body">
            Founded more than two decades ago in the sun-baked heart of Khanh Hoa province, our company has grown from a modest salt cooperative into one of Vietnam's most innovative and respected salt producers. Our vision has always been to blend traditional methods with modern technologies.
          </p>
          <p className="mb-2 text-body">
            Major milestones include facility expansion (2008), the launch of our export division (2013), and winning the National Quality Award (2022). Today, we operate across the entire supply chain, delivering world-class salt to over 30 countries.
          </p>
          <p className="text-body">
            Despite global reach, our roots and values remain firmly in Vietnam.
          </p>
        </Card>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {stats.map((stat, idx) => (
          <Card key={stat.label} className="flex flex-col items-center py-6 shadow-md bg-white/90 border-none">
            <stat.icon className="text-brand-red mb-2" size={34} />
            <span className="text-3xl text-black font-bold">{stat.value}</span>
            <span className="text-sm text-gray-500 mt-1">{stat.label}</span>
          </Card>
        ))}
      </div>
      {/* Values Section */}
      <Card className="p-8 rounded-2xl shadow-lg bg-white/70 border-none">
        <h2 id="values" className="heading-md text-brand-red mb-3">Our Values</h2>
        <p className="mb-2">
          At Khanh Hoa Salt, our values are quality, respect for community, environmental stewardship, and innovation. We uphold ethics, inclusivity, and sustainable growth—delivering value to customers and the communities that made us.
        </p>
        <p>
          Reputation is our foundation: trust and product purity drive our leadership in Vietnam and Asia.
        </p>
      </Card>
      <div className="flex justify-center">
        <Button className="mt-4 bg-brand-red text-white px-8 py-3 text-lg rounded-xl hover:scale-105 shadow transition-transform" onClick={() => navigate('/contact')}>
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;
