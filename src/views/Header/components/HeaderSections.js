
export default function HeaderSections({ sections }) {
    return (
        <div className="header-box-sections">
            {sections?.map( (section, index) => <h3 key={index}>{section}</h3>)}
        </div>
    );
}
               