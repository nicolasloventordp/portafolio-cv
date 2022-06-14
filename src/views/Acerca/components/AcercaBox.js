import AcercaPhoto from "./AcercaPhoto";
import AcercaPresentation from "./AcercaPresentation";
import Button from "../../../components/Button";

export default function AcercaBox({ className }) {
    return (
        <div className={className}>
             <div>
                <AcercaPhoto className={"acerca-photo box-shadow-1"}/>
                <AcercaPresentation className={"acerca-presentation box-shadow-1"}/>
            </div>
            <Button className={"btn-cv"} text={"Descargar mi CV"}/>
        </div>
    );
}