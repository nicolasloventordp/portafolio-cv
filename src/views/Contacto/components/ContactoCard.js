import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function ContactoCard({iconName, text, description, socialMedia}) {
    return (
        <div className="contacto-card box-shadow-1">
            <FontAwesomeIcon icon={iconName} />
            <h4>{description}</h4>
            { socialMedia ? 
                <div className="contacto-socialmedia">
                    <a href="https://www.facebook.com/nicolas.loventocai/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.twitter.com/nicolaslovento/"  target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.instagram.com/nicolovento/"  target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://github.com/nicolasloventordp/"  target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
                :  <span>{text} </span>}
           
        </div>
    );
}