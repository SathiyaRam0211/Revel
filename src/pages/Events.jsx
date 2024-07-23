import CustomNavbar from "../components/common/CustomNavbar";
import EventSection from "../components/sections/EventSection";
import { HomePage } from "../utils/util-styled-components";

const Events = () => {
  return (
    <HomePage>
      <CustomNavbar />
      <EventSection />
    </HomePage>
  );
};

export default Events;
