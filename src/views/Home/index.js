import HomeTitle from "./components/HomeTitle"
import Button from "../../components/Button"
import imgHero from "../../assets/images/fondo.jpg"
import "./style.css";

export default function Home() {
    return (
        <div id="home" className="home">
            <HomeTitle title={"BIENVENIDOS A MI SITIO"}/>
            <a href="#contacto" class="home-link"><Button className={"button"} text={"Contáctame"}/></a>
        </div>
    );
}