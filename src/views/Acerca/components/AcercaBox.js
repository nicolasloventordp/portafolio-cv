import AcercaPhoto from "./AcercaPhoto"
import AcercaButton from "./AcercaButton"

export default function AcercaBox({ className }) {
    return (
        <div className={className}>
            <AcercaPhoto className={"acerca-photo"}/>
            <AcercaButton className={"acerca-button"}/>
        </div>
    );
}