import { Link } from "react-router-dom";
import "./Attractions.css";

// Import images
import Rainforest from "../assets/Rainforest.jpg";
import VolcanoImage from "../assets/Volcano.jpg";
import FishingImage from "../assets/Fishing.jpg";
import ZiplineImage from "../assets/Zipline.jpg";

function Attractions() {
  return (
    <div className="attractions-page">
      <h2>Explore Taniti's Attractions</h2>
      <p>
        Discover the unique experiences that make Taniti a tropical paradise.
        Whether you seek adventure or relaxation, our attractions offer
        something for everyone.
      </p>
      <div className="attractions-grid">
        <div className="attraction-card">
          <img src={Rainforest} alt="Rainforest" />
          <h3>Rainforest Hikes</h3>
          <p>
            Immerse yourself in lush greenery as you explore our tropical
            rainforests, home to diverse wildlife and breathtaking views.
          </p>
          <div className="booking-button">
            <Link to="/booking">
              <button>Book Now</button>
            </Link>
          </div>
        </div>
        <div className="attraction-card">
          <img src={VolcanoImage} alt="Volcano" />
          <h3>Volcano Tours</h3>
          <p>
            Visit Taniti's active volcano and marvel at its rugged beauty.
            Guided tours offer a safe way to experience this natural wonder.
          </p>
          <Link to="/booking">
            <button>Book Now</button>
          </Link>
        </div>
        <div className="attraction-card">
          <img src={FishingImage} alt="Fishing" />
          <h3>Chartered Fishing</h3>
          <p>
            Set sail on a fishing adventure with experienced guides. Perfect for
            beginners and seasoned anglers alike.
          </p>
          <Link to="/booking">
            <button>Book Now</button>
          </Link>
        </div>
        <div className="attraction-card">
          <img src={ZiplineImage} alt="Zipline" />
          <h3>Ziplining</h3>
          <p>
            Experience the thrill of ziplining through the rainforest canopy.
            It's an adventure you won't forget!
          </p>
          <Link to="/booking">
            <button>Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Attractions;