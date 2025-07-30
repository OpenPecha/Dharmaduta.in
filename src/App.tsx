
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CorePillars from "./pages/CorePillars";
import WhoWeAre from "./pages/WhoWeAre";
import OurServices from "./pages/OurServices";
import OurModel from "./pages/OurModel";
import OurTeam from "./pages/OurTeam";
import CaseStudies from "./pages/CaseStudies";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/core-pillars" element={<CorePillars />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/our-model" element={<OurModel />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
