import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Energy from "./pages/Energy";
import Minerals from "./pages/Minerals";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/minerals" element={<Minerals />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
