import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Discover the Beauty of Taniti</h2>
        <Link to="/about-us">
          <button>Learn More</button>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
