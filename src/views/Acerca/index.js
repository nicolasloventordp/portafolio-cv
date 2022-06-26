import AcercaBox from "./components/AcercaBox";
import Title from "../../components/Title";
import "./style.css";

export default function Acerca() {
    return (
        <div id="acerca" className="acerca">
            <div class="section-separator "><div class="box-shadow-1"></div></div>
            <Title text="Acerca de mi"/>
            <AcercaBox className={"acerca-box box-shadow-1"} />
            <div class="section-separator "><div class="box-shadow-1"></div></div>
        </div>
    );
} 