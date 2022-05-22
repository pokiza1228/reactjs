import { useContext } from "react";
import { ProductContext } from "../../App";
import "./select.scss"

const Select =({width="255px", options,defaultValue,onChange, type="radio",isOpen, className1="",className2="",className3="",name="select"})=>{
    const {post, setPosts}=useContext(ProductContext);

  

return (
    <ul style={{width}} onChange={onChange} className={"select " + (isOpen ? "select--opened" : "")}>
        {
            options.map((option)=>
                <li className={"select__item  "+ className1}>
                    <label className={"select__label" +className2}>
                        <input defaultValue={option.value} defaultChecked={defaultValue===option.value} type={type} name={name} className={"select__filed visually-hidden " +className3}></input>
                        {option.text}
                        <span className="select__option-tick"></span>
                    </label>
                </li>
            )
        }
    </ul>
)
}

export default Select;