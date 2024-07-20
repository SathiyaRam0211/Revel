import Navbar from "../components/common/Navbar";
import EventSection from "../components/sections/EventSection";
import { HomePage } from "../utils/util-styled-components";

const Events = () => {
  return (
    <HomePage>
      <Navbar />
      <EventSection />
    </HomePage>
  );
};

export default Events;
