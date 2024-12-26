import { Link } from "react-router-dom";
import "./Lodging.css";

import ResortImage from "../assets/Resort.jpg";
import SmallBeachHotelImage from "../assets/SmallBeachHotel.jpg";

function Lodging() {
  return (
    <div className="lodging-page">
      <h2>Find Your Perfect Stay</h2>
      <p>
        Taniti offers a variety of accommodations to suit your needs, from
        luxurious resorts to charming family-owned hotels. No matter where you
        stay, you’ll be surrounded by the island's beauty and hospitality.
      </p>
      <div className="lodging-grid">
        <div className="lodging-card">
          <img src={ResortImage} alt="Resort" />
          <h3>Beachfront Resort</h3>
          <p>
            Experience luxury and convenience at Taniti’s four-star beachfront
            resort, perfect for those seeking relaxation and upscale amenities.
          </p>
          <Link to="/booking">
            <button>Book Now</button>
          </Link>
        </div>
        <div className="lodging-card">
          <img src={SmallBeachHotelImage} alt="Small Beach Hotel" />
          <h3>Cozy Beach Hotel</h3>
          <p>
            Enjoy a quaint and personalized experience at one of Taniti’s small,
            family-owned beach hotels, offering charm and comfort.
          </p>
          <Link to="/booking">
            <button>Book Now</button>
          </Link>
        </div>
      </div>
      <div className="lodging-sources">
        <p>Image Sources:</p>
        <p>
          Maldives, A. P. (2021). Aerial View of Beach. Pexels. Retrieved
          December 25, 2024, from{" "}
          <a
            href="https://www.pexels.com/photo/aerial-view-of-beach-9482125/"
            target="_blank"
          >
            https://www.pexels.com/photo/aerial-view-of-beach-9482125/
          </a>
          .
        </p>
        <p>
          Cottonbro Studio. (2020). Brown Wooden Houses On Beachside Under
          Coconut Trees. Retrieved December 25, 2024, from{" "}
          <a
            href="https://www.pexels.com/photo/brown-wooden-houses-on-beachside-under-coconut-trees-5599599/"
            target="_blank"
          >
            https://www.pexels.com/photo/brown-wooden-houses-on-beachside-under-coconut-trees-5599599/
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Lodging;
