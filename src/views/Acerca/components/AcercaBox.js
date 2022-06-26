import AcercaPhoto from "./AcercaPhoto"
import Button from "../../../components/Button";

export default function AcercaBox({ className }) {
    return (
        <div className={className}>
            <AcercaPhoto className={"acerca-photo"}/>
            <Button className={"btn-cv"} text={"Descargar mi CV"}/>
        </div>
    );
}