import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TeamCard from "./TeamCard.jsx";
import flag from "../assets/images/flag.png";
import { teamCards } from "../utils/utils.js";
const TeamCards = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 910 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 910, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="teamcard" className="mt-5">
      <div className=" team-cards-title d-flex justify-content-center align-center text-center m-2 ">
        <img src={flag} />
        <h2 className="p-1">
          <span className="rose">Master</span> tiene equipo
        </h2>
        <img src={flag} />
      </div>
      <Carousel responsive={responsive}>
        {teamCards.map((item) => (
          <TeamCard key={item.id} props={item} />
        ))}
      </Carousel>
    </section>
  );
};

export default TeamCards;
