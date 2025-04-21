
import React from "react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "CSR: Supporting Local Schools",
    date: "2024-03-20",
    summary: "Khanh Hoa Salt's community outreach includes educational sponsorship and providing resources for rural students.",
    img: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Environmental Day: Beach Cleanup Drive",
    date: "2024-05-05",
    summary: "Employees and families joined hands to restore Khanh Hoa's pristine shoreline in our annual cleanup.",
    img: "/placeholder.svg",
  },
];

const CSR: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <section className="section-container py-12">
        <BackButton to="/" label="Back to Home" />
        <h1 className="heading-lg text-brand-red mb-6 flex items-center gap-2">
          <Calendar className="text-brand-red" /> Corporate Social Responsibility (CSR)
        </h1>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow p-6 flex flex-col hover:scale-105 border-l-4 border-brand-red transition-transform cursor-pointer"
                onClick={() => navigate(`/news/csr/${article.id}`)}>
              <img src={article.img} alt="" className="rounded mb-3 h-40 object-cover w-full" />
              <div className="text-xs text-gray-500">{article.date}</div>
              <h2 className="font-bold text-xl mt-2 mb-1">{article.title}</h2>
              <p className="text-gray-700 text-sm">{article.summary}</p>
              <div className="mt-4">
                <span className="text-brand-red hover:underline text-sm font-medium cursor-pointer"
                      onClick={(e) => {e.stopPropagation(); navigate(`/news/csr/${article.id}`);}}>
                  Read More
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default CSR;
