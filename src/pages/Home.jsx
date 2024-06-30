import Navbar from "../components/common/Navbar";
import AnnouncementPage from "../components/sections/AnnouncementPage";
import LandingPage from "../components/sections/LandingPage";
import { HomePage } from "../utils/utils-web-styles";

const Home = () => {
  return (
    <HomePage>
      <Navbar />
      <LandingPage />
      <AnnouncementPage />
    </HomePage>
  );
};

export default Home;
