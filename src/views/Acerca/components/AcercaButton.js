import Button from "../../../components/Button"
import pdfCv from '../../../assets/pdf/cv-nicolaslovento.pdf'

export default function AcercaButton({ className }) {
    return (
        <div className={className}>
            <a href={pdfCv}  download="cv-nicolaslovento.pdf" >
                <Button className={"button"} text={"Descargar mi CV"}/>
            </a>
        </div>
    );
}