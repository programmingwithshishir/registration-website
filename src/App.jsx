import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./components/page1";
import EventRules from "./components/eventrules";
import StaticBackground from "./components/static-background";
import RegistrationPage from "./components/registration";

function App() {
  return (
    <Router>
      <StaticBackground />
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/eventrules" element={<EventRules />} />
        <Route path="/" element={<Page1 />} />
      </Routes>
    </Router>
  );
}

export default App;
