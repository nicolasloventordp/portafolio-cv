

export default function HeaderMenuMobile({ sections }) {
    
    return (
        <>
            <div className="header-menu-mobile " id="header-menu-mobile">
                {sections?.map( (section, index) => <h3  key={index}><a href={"#"+section.toLowerCase()}>{section}</a></h3>)}
            </div>
        </>
    );
}