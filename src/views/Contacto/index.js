import ContactoBox from "./components/ContactoBox"
import Title from "../../components/Title"
import "./style.css";

export default function Contacto() {
    return (
        <div id="contacto" className="contacto">
            <Title text="Contacto"/>
            <ContactoBox />
        </div>
    );
}