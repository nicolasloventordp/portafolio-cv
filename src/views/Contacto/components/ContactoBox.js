import ContactoCard from "./ContactoCard"
import { faPhone, faHouse, faEnvelope, faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
export default function ContactoBox() {
    
    return (
        <div className="contacto-box" >
            <ContactoCard iconName={faPhone} description="TELEFONO" text={"+5491158659304"} socialMedia={false}/>
            <ContactoCard iconName={faHouse} description="UBICACIÓN" text={"Avellaneda, Buenos Aires"} socialMedia={false}/>
            <ContactoCard iconName={faEnvelope} description="EMAIL" text={"nicolaslovento.94@gmail.com"} socialMedia={false}/>
            <ContactoCard iconName={faHashtag} description="SOCIAL MEDIA" text={""} socialMedia={true} />
        </div>
    );
}