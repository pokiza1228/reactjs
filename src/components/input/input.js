import "./input.scss"

const Input = ({className1="",className2="",h3,text,...props})=> {
    return (
        <label className={"filed "+className1}>
            <h3 className="filed__title">{h3}</h3>
            <span className="filed__text">{text}</span>
            <input className={"filed__input "+className2} {...props}>
                
            </input>
        </label>
    )
}
export default Input;