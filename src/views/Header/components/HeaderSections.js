
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import $ from 'jquery'
export default function HeaderSections({ sections }) {

    const openMenu = () => {
        
        $('#header-menu-mobile').toggleClass("open");
    }

    return (
        <>
            <div className="header-sections">
                {sections?.map( (section, index) => <h3  key={index}><a href={"#"+section.toLowerCase()}>{section}</a></h3>)}
            </div>
            <div className="header-sections-mobile" onClick={() => openMenu()}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
        </>
    );
}
               