import Navbar from "../components/common/Navbar";
import AnnouncementSection from "../components/sections/AnnouncementSection";
import LandingSection from "../components/sections/LandingSection";
import { HomePage } from "../utils/util-styled-components";

const Home = () => {
  return (
    <HomePage>
      <Navbar />
      <LandingSection />
      <AnnouncementSection />
    </HomePage>
  );
};

export default Home;
