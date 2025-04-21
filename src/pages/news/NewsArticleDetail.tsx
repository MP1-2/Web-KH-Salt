import React from "react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";
import { useParams, useNavigate } from "react-router-dom";

const DUMMY_ARTICLE = {
  id: 1,
  image: "/placeholder.svg",
  title: "Sample News Article Title",
  date: "2024-04-01",
  author: "Admin",
  content: `This is a full article content. It covers the latest news inside the company and the salt market. Here you can show an image, text, and optionally related content links.`,
  related: [
    { id: 2, title: "Another Article", path: "/news/market/2" },
    { id: 3, title: "CSR Initiative", path: "/news/csr/1" },
  ]
};

const NewsArticleDetail: React.FC = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();

  const article = DUMMY_ARTICLE;

  return (
    <Layout>
      <section className="section-container py-10">
        <BackButton label="Back to Home" />
        <h1 className="heading-lg text-brand-red mb-2">{article.title}</h1>
        <div className="text-gray-600 mb-5 text-sm flex gap-2">
          <span>{article.date}</span>
          <span>•</span>
          <span>by {article.author}</span>
        </div>
        <img src={article.image} alt="" className="rounded-lg mb-4 max-h-96 mx-auto object-cover" />
        <p className="text-body">{article.content}</p>
        <div className="mt-10">
          <h2 className="heading-sm text-brand-red mb-3">Related Articles</h2>
          <ul className="space-y-2">
            {article.related.map((rel) => (
              <li key={rel.id}>
                <span
                  className="text-brand-red cursor-pointer hover:underline"
                  onClick={() => navigate(rel.path)}
                >
                  {rel.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default NewsArticleDetail;
