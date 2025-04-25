
import React from "react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";
import { Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

// Dummy job data for demo
const jobs = [
  {
    id: 1,
    title: "Sales Executive",
    desc: "Manage business relationships and develop clients across Vietnam.",
    location: "Khanh Hoa",
    summary: "A role for strong communicators and energetic team-players to drive market growth nationwide.",
  },
  {
    id: 2,
    title: "Production Supervisor",
    desc: "Oversee salt production and ensure quality control.",
    location: "Khanh Hoa",
    summary: "Seeking detail-oriented supervisors to manage our advanced production facilities.",
  },
  {
    id: 3,
    title: "Marketing Specialist",
    desc: "Lead digital and offline marketing campaigns.",
    location: "Ho Chi Minh City",
    summary: "Be our storytelling expert to grow brand awareness in the industry.",
  },
];

const CareerPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="section-container py-10">
      <BackButton to="/" label={t('nav.backHome')} />
        <h1 className="heading-lg text-brand-red mb-6 flex items-center gap-2">
          <Briefcase className="text-brand-red" /> Careers
        </h1>
        <p className="text-gray-700 mb-6 text-lg">Join our team of dedicated professionals! Explore openings and apply today.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div key={job.id} className="bg-black text-white rounded-xl p-5 shadow-lg hover:shadow-xl border border-brand-red hover:scale-105 transition-transform flex flex-col">
              <div>
                <h2 className="font-bold text-xl text-brand-red mb-2">{job.title}</h2>
                <div className="font-medium mb-1">{job.desc}</div>
                <div className="text-sm text-gray-300 mb-2">Location: {job.location}</div>
                <p className="text-sm text-gray-200 mb-4">{job.summary}</p>
              </div>
              <button
                className="mt-auto bg-brand-red text-white rounded py-2 px-4 font-semibold hover:scale-105 transition-transform"
                onClick={() => navigate(`/career/${job.id}`)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default CareerPage;
