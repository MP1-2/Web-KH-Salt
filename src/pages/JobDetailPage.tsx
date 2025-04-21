
import React from "react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Demo job detail data
const JOBS = [
  {
    id: 1,
    title: "Sales Executive",
    location: "Khanh Hoa",
    description: `As a Sales Executive, you will manage business relationships and develop clients nationwide. Responsibilities include reaching sales targets, maintaining customer satisfaction, and designing strategies for client engagement.`,
    requirements: [
      "Bachelor's degree in Business or related field.",
      "Minimum 2 years sales experience.",
      "Excellent communication and negotiation skills.",
      "Proficiency in English and Vietnamese.",
      "Ability to travel as needed."
    ]
  },
  {
    id: 2,
    title: "Production Supervisor",
    location: "Khanh Hoa",
    description: `Production Supervisors oversee all stages of the salt production process, ensuring quality and efficiency. The role includes managing a team and maintaining safety standards.`,
    requirements: [
      "Diploma or above in Engineering/related field.",
      "Proven leadership in manufacturing environments.",
      "Strong understanding of quality control.",
      "Ability to manage shifts and reports."
    ]
  },
  {
    id: 3,
    title: "Marketing Specialist",
    location: "Ho Chi Minh City",
    description: `The Marketing Specialist develops and implements campaigns across various digital and offline channels, maintaining the company's branding and driving market expansion.`,
    requirements: [
      "Degree in Marketing/Communications.",
      "Experience with digital marketing tools.",
      "Creative and analytical mindset.",
      "Strong writing and presentation skills."
    ]
  },
];

const JobDetailPage: React.FC = () => {
  const { jobId } = useParams();
  const job = JOBS.find(j => `${j.id}` === jobId);

  if (!job) return (
    <Layout>
      <div className="section-container py-10">
        <BackButton to="/career" label="Back to Careers" />
        <p>Job not found.</p>
      </div>
    </Layout>
  );

  return (
    <Layout>
      <div className="section-container py-10">
        <BackButton to="/career" label="Back to Careers" />
        <h1 className="heading-lg text-brand-red mb-2">{job.title}</h1>
        <div className="text-sm text-gray-400 mb-2">{job.location}</div>
        <p className="text-body mb-5">{job.description}</p>
        <h2 className="heading-md text-brand-red mb-2">Requirements & Qualifications</h2>
        <ul className="mb-6 pl-5 list-disc text-gray-700">
          {job.requirements.map((r, i) => (
            <li key={i} className="mb-1">{r}</li>
          ))}
        </ul>
        <a href="mailto:hr@khanhhoasalt.com?subject=Job Application" target="_blank" rel="noopener noreferrer">
          <Button className="bg-brand-red text-white px-6 py-2 text-lg rounded-lg hover:scale-105 transition-transform">
            Apply Now
          </Button>
        </a>
      </div>
    </Layout>
  )
}

export default JobDetailPage;
