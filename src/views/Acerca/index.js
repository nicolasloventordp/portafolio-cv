import AcercaBox from "./components/AcercaBox";
import Title from "../../components/Title";
import "./style.css";

export default function Acerca() {
    return (
        <div id="acerca" className="acerca">
            <Title text="Acerca de mi"/>
            <AcercaBox className={"acerca-box box-shadow-1"} />
        </div>
    );
} 