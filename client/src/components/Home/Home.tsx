import AffiliatedColleges from "./AffiliatedColleges/AffiliatedColleges";
import "./AffiliatedColleges/AffiliatedCollegesStyles.css";

import NewsSection from "./NewsSection/NewsSection";
import "./NewsSection/NewsSectionStyles.css";

import ReviewSection from "./ReviewSection/ReviewSection";
import "./ReviewSection/ReviewSectionStyles.css";

import SearchBar from "./SearchBar/SearchBar";
import "./SearchBar/SearchBarStyles.css";

import Footer from "./Footer/Footer";
import "./Footer/FooterStyles.css";

import DataCard from "./DataCard/DataCard";
import "./DataCard/DataCardStyles.css";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <Navbar />
        <SearchBar />
        <NewsSection />
        <ReviewSection />
        <AffiliatedColleges />
        <DataCard />
        <Footer />
      </div>
    </>
  );
};

export default Home;
