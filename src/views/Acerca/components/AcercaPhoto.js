import photoCv from '../../../assets/images/foto-cv.png';
import AcercaText from "./AcercaText"
export default function AcercaPhoto({ className }) {
    return (
        <div>
            <div className={className}>
                <img src={photoCv} />
            </div>
            <AcercaText className={"acerca-text"}/>
        </div>
    );
}