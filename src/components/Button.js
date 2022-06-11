
export default function Button({ className, text }) {
    return (
        <button className={className + " box-shadow-2"}><h4>{text}</h4></button>
    );
}