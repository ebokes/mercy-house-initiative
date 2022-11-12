import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactUs from "./pages/ContactUs";
import Error404 from "./pages/Error404";
import Gallery from "./pages/Gallery";
import GetInvolved from "./pages/GetInvolved";
import Navbar from "./components/Navbar";
import Resources from "./pages/Resources";
import WhoWeAre from "./pages/WhoWeAre";

function App() {
  return (
    <div className="font-Montserrat ">
      <Navbar />
      <Routes>
        <Route path="/" element={<WhoWeAre />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
