
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  to?: string;
  label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to = "/", label = "Back" }) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      className="mb-4 flex items-center gap-2 text-brand-red border-brand-red hover:bg-brand-red hover:text-white"
      onClick={() => (to ? navigate(to) : navigate(-1))}
      size="sm"
    >
      <ArrowLeft size={18} /> {label}
    </Button>
  );
};

export default BackButton;
