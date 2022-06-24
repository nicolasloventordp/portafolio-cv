import HeaderLogo from './HeaderLogo';
import HeaderSections from './HeaderSections';
import HeaderMenuMobile from './HeaderMenuMobile';

export default function HeaderBox() {
    return (
        <div className="header-box">
            <HeaderLogo logoContent={"Nicolás Lo Vento"}/>
            <HeaderSections sections={['Home','Acerca','Contacto']}/>
            <HeaderMenuMobile sections={['Home','Acerca','Contacto']}/>
        </div>
    );
}