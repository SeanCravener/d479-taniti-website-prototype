import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Attractions from "./pages/Attractions";
import Lodging from "./pages/Lodging";
import Dining from "./pages/Dining";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/lodging" element={<Lodging />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
