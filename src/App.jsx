import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./components/page1";
import EventRules from "./components/eventRules";
import StaticBackground from "./components/staticBackground";
import RegistrationPage from "./components/registration";
import ScrollToTop from "./components/scrollToTop";
import ViewRegistered from "./components/viewRegistered";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <StaticBackground />
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/eventrules" element={<EventRules />} />
        <Route path="/viewregistered" element={<ViewRegistered />} />
        <Route path="/" element={<Page1 />} />
      </Routes>
    </Router>
  );
}

export default App;
