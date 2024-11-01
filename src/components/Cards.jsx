import "./Cards.css";
import Chamber from "./Chamber";
import Jett from "./Jett";
import Viper from "./Viper";

const Cards = () => {
  return (
    <div className="cards-container">
      <Chamber />
      <Viper />
      <Jett />
    </div>
  );
};

export default Cards;
