
import React from "react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";
import { useNavigate } from "react-router-dom";
import { Newspaper } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Staff Training: New Horizons for Career Growth",
    date: "2024-03-25",
    summary: "Internal training boosts staff competence and morale. Our latest session focused on teamwork and process innovation.",
    img: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Celebration: 20 Years of Khanh Hoa Salt",
    date: "2024-02-10",
    summary: "Marking two decades of growth and excellence, employees gathered for memorable festivities and reflection.",
    img: "/placeholder.svg",
  },
];

const InternalNews: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="section-container py-12">
        <BackButton to="/" label="Back to Home" />
        <h1 className="heading-lg text-brand-red mb-6 flex items-center gap-2">
          <Newspaper className="text-brand-red" /> Internal News
        </h1>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow p-6 flex flex-col hover:scale-105 border-l-4 border-brand-red transition-transform cursor-pointer"
                onClick={() => navigate(`/news/internal/${article.id}`)}>
              <img src={article.img} alt="" className="rounded mb-3 h-40 object-cover w-full" />
              <div className="text-xs text-gray-500">{article.date}</div>
              <h2 className="font-bold text-xl mt-2 mb-1">{article.title}</h2>
              <p className="text-gray-700 text-sm">{article.summary}</p>
              <div className="mt-4">
                <span className="text-brand-red hover:underline text-sm font-medium cursor-pointer"
                      onClick={(e) => {e.stopPropagation(); navigate(`/news/internal/${article.id}`);}}>
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

export default InternalNews;
