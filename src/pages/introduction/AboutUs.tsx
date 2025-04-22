import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, Globe, Award, Briefcase } from "lucide-react";
import BackButton from "@/components/common/BackButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

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
    <Layout>
      <section className="w-full flex flex-col items-center min-h-[80vh] pt-20 pb-16 bg-white">
        <div className="section-container w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <BackButton to="/" label="Back to Home" /> {/* Replaced with Partners' BackButton props */}

          {/* Hero Title */}
          <div className="text-center mb-8">
            <h1 className="heading-lg text-brand-red mb-2 tracking-wider" style={{ letterSpacing: '1.5px' }}>
              ABOUT <span className="text-black">US</span>
            </h1>
            <div className="mx-auto w-20 h-1 bg-brand-red rounded-full mb-2"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Leading Vietnam’s salt innovation. Trusted worldwide for quality, sustainability, and tradition.
            </p>
          </div>

          {/* Images and Text Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-stretch">
            {/* Gallery Card */}
            <Card className="bg-white border border-gray-100 shadow-lg rounded-2xl flex flex-col justify-between p-0">
              <div className="flex flex-row gap-3 p-6 pb-2">
                <img src={images[0].src} alt={images[0].alt} className="rounded-xl w-1/2 object-cover max-h-44 border border-gray-200 shadow" />
                <div className="flex flex-col gap-3 w-1/2">
                  <img src={images[1].src} alt={images[1].alt} className="rounded-xl object-cover border border-gray-200 shadow max-h-20" />
                  <img src={images[2].src} alt={images[2].alt} className="rounded-xl object-cover border border-gray-200 shadow max-h-20" />
                </div>
              </div>
              <div className="flex py-3 px-6 gap-2 flex-wrap justify-between bg-gray-50 rounded-b-2xl">
                {images.map((img) => (
                  <div key={img.alt} className="italic text-xs text-gray-500 w-1/3 text-center">{img.caption}</div>
                ))}
              </div>
            </Card>
            {/* History and Values */}
            <Card className="bg-gray-50 border border-gray-100 shadow-lg p-8 rounded-2xl flex flex-col justify-center min-h-[310px]">
              <h2 id="history" className="text-2xl font-bold text-brand-red mb-2 tracking-wide">Our History</h2>
              <div className="h-1 w-12 bg-brand-red rounded mb-3"></div>
              <p className="mb-2 text-gray-700">
                Founded over two decades ago in sun-baked Khanh Hoa, we’ve evolved from a cooperative to a top salt innovator. Through blending tradition and technology, our global reach now spans 30+ countries.
              </p>
              <p className="mb-2 text-gray-700">
                Key milestones: Facility expansion (2008), export division launch (2013), and the National Quality Award (2022).
              </p>
              <p className="text-gray-700 font-semibold">
                Firm Vietnamese roots with a world-class standard.
              </p>
            </Card>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-white flex flex-col items-center py-7 px-2 border border-gray-200 rounded-xl shadow hover:shadow-md transition-all">
                <stat.icon className="text-brand-red mb-2" size={30} />
                <span className="text-3xl text-black font-bold">{stat.value}</span>
                <span className="text-sm text-gray-600 mt-1 text-center">{stat.label}</span>
              </Card>
            ))}
          </div>
          {/* Our Values Section */}
          <div className="bg-[#FAFAFA] rounded-2xl py-10 px-7 md:px-16 shadow-sm border border-gray-100 mb-10">
            <h2 id="values" className="text-2xl font-bold text-brand-red mb-2 tracking-wide">Our Values</h2>
            <div className="w-12 h-1 bg-brand-red rounded mb-3"></div>
            <p className="mb-2 text-gray-700 font-medium">
              Quality, respect for community, environmental stewardship, and innovation drive us. We grow responsibly and inclusively—delivering purity and trust.
            </p>
            <p className="text-gray-700">
              Our reputation is built on ethics, trust, and the communities who make our company exceptional.
            </p>
          </div>
          <div className="flex justify-center">
            <Button className="bg-brand-red hover:bg-black text-white px-10 py-3 text-lg rounded-lg font-bold shadow" onClick={() => navigate('/contact')}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
