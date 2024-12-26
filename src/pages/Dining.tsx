import { Link } from "react-router-dom";
import "./Dining.css";

import DiningImage from "../assets/Dining.jpg";

function Dining() {
  return (
    <div className="dining-page">
      <h2>Delight in Taniti's Dining Options</h2>
      <p>
        Taniti offers a range of dining experiences to suit every taste. From
        fresh local seafood to Pan-Asian and American-style meals, you're sure
        to find something to satisfy your palate.
      </p>
      <div className="dining-highlight">
        <img src={DiningImage} alt="Dining Experience" />
        <div className="dining-details">
          <h3>Savor the Flavors of Taniti</h3>
          <p>
            Enjoy meals prepared with fresh, local ingredients while soaking in
            the beauty of Taniti. Whether you're looking for a casual bite or a
            fine dining experience, the island's restaurants have you covered.
          </p>
          <Link to="/booking">
            <button>Book Now</button>
          </Link>
        </div>
      </div>
      <div className="dining-sources">
        <p>Image Sources:</p>
        <p>
          Acartürk, K. C. (2024). A view of the ocean from a restaurant. Pexels.
          Retrieved December 25, 2024, from{" "}
          <a
            href="https://www.pexels.com/photo/a-view-of-the-ocean-from-a-restaurant-27981200/"
            target="_blank"
          >
            https://www.pexels.com/photo/a-view-of-the-ocean-from-a-restaurant-27981200/
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Dining;
