import Button from "../../../components/Button"
export default function AcercaButton({ className }) {
    return (
        <div className={className}>
            <a href="https://export-download.canva.com/d-L7M/DAFDgEd-L7M/985/0-29585286807.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20220627%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220627T053208Z&X-Amz-Expires=68688&X-Amz-Signature=4d09089ec4cba4e35a9f6ba0984219d7fa9998aa94382be5a34cef76dfdf999d&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27cv-nicolaslovento.pdf&response-expires=Tue%2C%2028%20Jun%202022%2000%3A36%3A56%20GMT"  download="cv-nicolaslovento.pdf" >
                <Button className={"button"} text={"Descargar mi CV"}/>
            </a>
        </div>
    );
}