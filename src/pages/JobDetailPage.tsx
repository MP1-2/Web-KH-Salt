import React from "react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";
import { Briefcase } from "lucide-react";

// Dummy job data for demo
const job =   {
    id: 1,
    title: "Sales Executive",
    desc: "Manage business relationships and develop clients across Vietnam.",
    location: "Khanh Hoa",
    summary: "A role for strong communicators and energetic team-players to drive market growth nationwide.",
    details: `
      **Responsibilities:**
      - Develop and maintain relationships with key clients.
      - Identify new business opportunities.
      - Achieve sales targets.

      **Requirements:**
      - Bachelor's degree in Business or related field.
      - Proven sales experience.
      - Excellent communication skills.
    `
  };

const JobDetailPage = () => {
  return (
    <Layout>
      <section className="section-container py-10 min-h-[60vh]">
        <BackButton label="Back to Home" />
        <h1 className="heading-lg text-brand-red mb-6 flex items-center gap-2">
          <Briefcase className="text-brand-red" /> {job.title}
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="text-gray-700 mb-4 text-lg">{job.desc}</div>
            <div className="text-sm text-gray-500 mb-4">Location: {job.location}</div>
            <p className="text-gray-700 mb-6">{job.details}</p>
          </div>
          <div>
            <h3 className="heading-sm text-brand-red mb-3">Summary</h3>
            <p className="text-gray-700">{job.summary}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JobDetailPage;
