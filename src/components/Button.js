
export default function Button({ className, text }) {
    return (
        <button className={className + " box-shadow-2"}><h3>{text}</h3></button>
    );
}