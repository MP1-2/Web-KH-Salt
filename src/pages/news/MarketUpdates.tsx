
import React from "react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";
import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Vietnam Salt Market 2024: Growth Overview",
    date: "2024-05-01",
    summary: "An analysis of the expanding Vietnamese salt market and Khanh Hoa Salt's role in export.",
    img: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Salt Price Trends & Forecasts",
    date: "2024-04-10",
    summary: "Salt prices see moderate increase. Industry outlook remains strong for exporters.",
    img: "/placeholder.svg",
  },
];

const MarketUpdates: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <section className="section-container py-12">
        <BackButton to="/" label="Back to Home" />
        <h1 className="heading-lg text-brand-red mb-6 flex items-center gap-2">
          <FileText className="text-brand-red" /> Market Updates
        </h1>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow p-6 flex flex-col hover:scale-105 border-l-4 border-brand-red transition-transform cursor-pointer"
                onClick={() => navigate(`/news/market/${article.id}`)}>
              <img src={article.img} alt="" className="rounded mb-3 h-40 object-cover w-full" />
              <div className="text-xs text-gray-500">{article.date}</div>
              <h2 className="font-bold text-xl mt-2 mb-1">{article.title}</h2>
              <p className="text-gray-700 text-sm">{article.summary}</p>
              <div className="mt-4">
                <span className="text-brand-red hover:underline text-sm font-medium cursor-pointer"
                      onClick={(e) => {e.stopPropagation(); navigate(`/news/market/${article.id}`);}}>
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
export default MarketUpdates;
