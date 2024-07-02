import Navbar from "../components/common/Navbar";
import EventsPage from "../components/sections/EventsPage";
import { HomePage } from "../utils/util-styled-components";

const Events = () => {
  return (
    <HomePage>
      <Navbar />
      <EventsPage />
    </HomePage>
  );
};

export default Events;
