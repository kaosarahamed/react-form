

const InputField = (props) => {
    return <div className="form-group">
        <input 
        className={'form-control mb-3'}
        name={props.name}
        type = {props.type}
        label={props.label}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        
        />
    </div>
}





export default InputField;