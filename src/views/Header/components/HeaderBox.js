import HeaderLogo from './HeaderLogo';
import HeaderSections from './HeaderSections';

export default function HeaderBox() {
    return (
        <div className="header-box">
            <HeaderLogo logoContent={"Nicolás Lo Vento"}/>
            <HeaderSections sections={['Home','Acerca','Contacto']}/>
        </div>
    );
}