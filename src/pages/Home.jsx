import CustomNavbar from "../components/common/CustomNavbar";
import AnnouncementSection from "../components/sections/AnnouncementSection";
import LandingSection from "../components/sections/LandingSection";
import { HomePage } from "../utils/util-styled-components";

const Home = () => {
  return (
    <HomePage>
      <CustomNavbar />
      <LandingSection />
      <AnnouncementSection />
    </HomePage>
  );
};

export default Home;
