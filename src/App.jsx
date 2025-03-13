import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./components/page1";
import EventRules from "./components/eventRules";
import StaticBackground from "./components/staticBackground";
import RegistrationPage from "./components/registration";
import ScrollToTop from "./components/scrollToTop";
import ViewRegistered from "./components/viewRegistered";
import ViewUnregistered from "./components/viewUnregistered";
import Coding from "./components/events/coding";
import ItQuiz from "./components/events/itQuiz";
import WebDesigning from "./components/events/webDesigning";
import CulturalDance from "./components/events/culturalDance";
import ItManager from "./components/events/itManager";
import Videography from "./components/events/videography";
import ProductLaunch from "./components/events/productLaunch";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <StaticBackground />
      <Routes>
        <Route path="/coding" element={<Coding />} />
        <Route path="/it-quiz" element={<ItQuiz />} />
        <Route path="/web-designing" element={<WebDesigning />} />
        <Route path="/cultural-dance" element={<CulturalDance />} />
        <Route path="/it-manager" element={<ItManager />} />
        <Route path="/videography" element={<Videography />} />
        <Route path="/product-launch" element={<ProductLaunch />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/eventrules" element={<EventRules />} />
        <Route path="/viewunregistered" element={<ViewUnregistered />} />
        <Route path="/viewregistered" element={<ViewRegistered />} />
        <Route path="/" element={<Page1 />} />
      </Routes>
    </Router>
  );
}

export default App;
