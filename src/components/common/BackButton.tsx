
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// No longer accept "to", always goes Home
interface BackButtonProps {
  label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ label = "Back to Home" }) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      className="mb-4 flex items-center gap-2 text-brand-red border-brand-red hover:bg-brand-red hover:text-white"
      onClick={() => navigate("/")}
      size="sm"
      aria-label="Back to Home"
    >
      <ArrowLeft size={18} /> {label}
    </Button>
  );
};

export default BackButton;
