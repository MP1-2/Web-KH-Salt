
import React from "react";
import BackButton from "@/components/common/BackButton";

const partners = [
  {
    name: "Vietnam Retail Co.",
    description:
      "A leading retail chain, collaborating with us on national distribution and marketing initiatives for more than a decade.",
    logo: "/placeholder.svg",
    link: "#",
  },
  {
    name: "Asia Export Group",
    description:
      "Long-term export partner, facilitating our products’ reach in over 15 countries and ensuring reliable logistics.",
    logo: "/placeholder.svg",
    link: "#",
  },
  {
    name: "Saigon Supermarkets",
    description:
      "Major retail partner handling prime shelf displays and promotional events for table salt products throughout southern Vietnam.",
    logo: "/placeholder.svg",
    link: "#",
  },
  {
    name: "Northern Foods Ltd.",
    description:
      "Distributor for industrial grading, assuring continuous supply to Vietnam's northern manufacturers.",
    logo: "/placeholder.svg",
    link: "#",
  },
  {
    name: "Pacific Sea Imports",
    description:
      "Handles our high-grade specialty salts for premium restaurant and culinary clients across Asia-Pacific.",
    logo: "/placeholder.svg",
    link: "#",
  },
  {
    name: "Metro Wholesale",
    description:
      "Supports our B2B channels, distributing bulk salt products to hotels and caterers across Vietnam.",
    logo: "/placeholder.svg",
    link: "#",
  },
];

const Partners = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 min-h-[70vh] bg-black rounded-xl flex flex-col gap-8">
      <BackButton to="/" label="Back to Home" />
      <h1 className="heading-lg text-brand-red mb-8">Partners</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {partners.map((p) => (
          <div
            key={p.name}
            className="flex flex-col items-center bg-zinc-900 rounded-lg p-4 hover:border-brand-red hover:shadow-lg border border-zinc-800 transition-all duration-200"
          >
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center w-full"
              tabIndex={-1}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="mb-2 grayscale group-hover:grayscale-0 group-hover:border-brand-red border transition-all duration-200"
                style={{ width: 200, height: 100, objectFit: "contain" }}
              />
            </a>
            <div className="font-bold text-white mb-1 text-center">{p.name}</div>
            <div className="text-zinc-300 text-sm text-center" style={{ fontSize: 14 }}>{p.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
