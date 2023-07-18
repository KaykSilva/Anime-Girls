
import { InfoCards } from "../../components/InfoCards/InfoCards";
import "./Home.css";
import Navbarc from "../../components/Navbar/Navbar";



function Home() {
  return (
    <div className="container-menu">
    <Navbarc/>
     <h1>💮Várias APis em um só lugar💮</h1>
   <InfoCards/>
    </div>
  );
}

export default Home;
