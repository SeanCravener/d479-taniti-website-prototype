import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedSection />
      <div className="home-sources">
        <p>Image Sources:</p>
        <p className="source-text">
          Maldives, A. P. (2024). Stunning Sunset at Kanuhura Maldives Resort.
          Pexels. Retrieved December 25, 2024, from{" "}
          <a
            href="https://www.pexels.com/photo/stunning-sunset-at-kanuhura-maldives-resort-28843931/"
            target="_blank"
          >
            https://www.pexels.com/photo/stunning-sunset-at-kanuhura-maldives-resort-28843931/
          </a>
          .
        </p>
        <p className="source-text">
          Segal, R. (2018). Person Takes Photo Of Tortoise. Retrieved December
          25, 2024, from{" "}
          <a
            href="https://www.pexels.com/photo/person-takes-photo-of-tortoise-1645028/"
            target="_blank"
          >
            https://www.pexels.com/photo/person-takes-photo-of-tortoise-1645028/
          </a>
          .
        </p>
        <p className="source-text">
          P., O. (2018). White and Blue Passenger Airplane Aerial Photography .
          Retrieved December 25, 2024, from{" "}
          <a
            href="https://www.pexels.com/photo/white-and-blue-passenger-airplane-aerial-photography-1004584/"
            target="_blank"
          >
            https://www.pexels.com/photo/white-and-blue-passenger-airplane-aerial-photography-1004584/
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Home;
