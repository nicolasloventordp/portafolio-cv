
import $ from 'jquery'

export default function HeaderMenuMobile({ sections }) {
    
    const cerrarMenu = () => {
        $('#header-menu-mobile').removeClass("open");
    }
    return (
        <>
            <div className="header-menu-mobile " id="header-menu-mobile">
                {sections?.map( (section, index) => <h3  key={index}><a href={"#"+section.toLowerCase()} onClick={() => cerrarMenu()}>{section}</a></h3>)}
            </div>
        </>
    );
}