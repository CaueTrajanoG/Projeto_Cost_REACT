import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="minHeight">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
