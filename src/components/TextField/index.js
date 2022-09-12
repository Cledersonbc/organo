import './TextField.css'

const TextField = (props) => {

    const onTyping = (event) => {
        props.onChanged(event.target.value);
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={onTyping} placeholder={props.placeholder} required={props.required} />
        </div>
    );
}

export default TextField;