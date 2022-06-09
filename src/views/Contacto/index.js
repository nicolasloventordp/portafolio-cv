import { Fragment } from "react";
import HomeTitle from "./components/HomeTitle";
import Button from "../../components/Button";

import "./style.css";

export default function Contacto() {
    return (
        <div className="contacto">
            <HomeTitle title={"Bienvenid@s a mi sitio"}/>
            <Button className={"home-button"} text={"Contáctame"}/>
        </div>
    );
}