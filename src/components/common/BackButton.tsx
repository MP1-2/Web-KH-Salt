import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  to?: string;
  label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to = "/", label = "Back" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => (to ? navigate(to) : navigate(-1))}
      className="mb-4 flex items-center gap-2 text-brand-red hover:text-black font-medium transition-colors duration-300"
    >
      <ArrowLeft size={18} />
      {label}
    </button>
  );
};

export default BackButton;
