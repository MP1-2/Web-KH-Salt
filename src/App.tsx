import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import DistributionPage from "./pages/DistributionPage";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/introduction/AboutUs";
import MissionsAndGoals from "./pages/introduction/MissionsAndGoals";
import LeadershipBoard from "./pages/introduction/LeadershipBoard";
import Partners from "./pages/introduction/Partners";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/distribution" element={<DistributionPage />} />
            <Route path="/introduction/about" element={<AboutUs />} />
            <Route path="/introduction/missions" element={<MissionsAndGoals />} />
            <Route path="/introduction/leadership" element={<LeadershipBoard />} />
            <Route path="/introduction/partners" element={<Partners />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
