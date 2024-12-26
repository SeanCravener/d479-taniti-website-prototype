import { Link } from "react-router-dom";
import "./FeaturedSection.css";

function FeaturedSection() {
  return (
    <section className="featured-section">
      <div className="featured-card snorkeling">
        <h3>Snorkeling</h3>
        <div className="featured-card-content">
          <p>
            Experience vibrant marine life in Taniti’s crystal-clear waters.
          </p>
        </div>
        <Link to="/booking">
          <button>Book Now</button>
        </Link>
      </div>
      <div className="featured-card flight">
        <h3>Book Your Flight</h3>

        <div className="featured-card-content">
          <p>Plan your journey to the paradise of Taniti with ease.</p>
        </div>
        <Link to="/booking">
          <button>Book Now</button>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedSection;
