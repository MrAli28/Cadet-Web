import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import Faculty from "./pages/Faculty";
import CampusLife from "./pages/CampusLife";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import WiderCurriculum from "./pages/WiderCurriculum";
import Career from "./pages/Career";
import InfoPage from "./pages/InfoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/wider-curriculum" element={<WiderCurriculum />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/info/:pageId" element={<InfoPage />} />
            <Route path="/foreword-by-the-principal" element={<Navigate to="/info/foreword-by-principal" replace />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
