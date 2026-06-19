import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import ScrollToTop from "@/components/ui/ScrollToTop";
import EcosystemSuggestions from "@/components/shared/EcosystemSuggestions";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Telecoms from "./pages/Telecoms";
import Energy from "./pages/Energy";
import Minerals from "./pages/Minerals";
import Electronics from "./pages/Electronics";
import CeoMessage from "./pages/CeoMessage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <EcosystemSuggestions />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/telecoms" element={<Telecoms />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/minerals" element={<Minerals />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/ceo" element={<CeoMessage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
