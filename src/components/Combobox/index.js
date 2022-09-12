import './Combobox.css'

const Combobox = (props) => {
    return (
        <div className='Combobox'>
            <label>{props.label}</label>
            <select value={props.value}
                required={props.required}
                onChange={event => props.onChanged(event.target.value)}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default Combobox;