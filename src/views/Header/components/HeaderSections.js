
export default function HeaderSections({ sections }) {
    return (
        <div className="header-box-sections">
            {sections?.map( (section, index) => <h3  key={index}><a href={"#"+section.toLowerCase()}>{section}</a></h3>)}
        </div>
    );
}
               