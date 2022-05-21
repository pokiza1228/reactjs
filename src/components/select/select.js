import { useContext } from "react";
import { ProductContext } from "../../App";
import "./select.scss"

const Select =({type="radio",className1,className2,className3,text,name="select"})=>{
    const {post}=useContext(ProductContext);

  

return (
    <ul className="select">
        <li className={"select__item "+ className1}>
            <label className={"select__label" +className2}>
                <input type={type} name={name} className={"select__filed" +className3}></input>
                <span className="select__text">{text}most comment</span>
            </label>
        </li>
        <li className={"select__item "+ className1}>
            <label className={"select__label" +className2}>
                <input type={type} name={name} className={"select__filed" +className3}></input>
                <span>{text}most comment</span>
            </label>
        </li>
        <li className={"select__item "+ className1}>
            <label className={"select__label" +className2}>
                <input type={type} name={name} className={"select__filed" +className3}></input>
                <span>{text}most comment</span>
            </label>
        </li>
        <li className={"select__item "+ className1}>
            <label className={"select__label" +className2}>
                <input type={type} name={name} className={"select__filed" +className3}></input>
                <span>{text}most comment</span>
            </label>
        </li>
    </ul>
)
}

export default Select;