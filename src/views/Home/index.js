import { Fragment } from "react";
import HomeTitle from "./components/HomeTitle";
import Button from "../../components/Button";

import "./style.css";

export default function Home() {
    return (
        <div id="home" className="home">
            <HomeTitle title={"Bienvenid@s a mi sitio"}/>
            <Button className={"home-button"} text={"Contáctame"}/>
        </div>
    );
}