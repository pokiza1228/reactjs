import "./input.scss"
import { Ref } from "react";
import { forwardRef } from "react";

const ElInput = forwardRef((props, ref) => <input ref={ref} {...props}></input>);
const Input = ({className1="",className2="",h3,text="",className3="",ref,type,onInput,...props})=> {
    return (
        <label className={"filed "+className1}>
            <h3 className={"filed__title "+className3}>{h3}</h3>
            <span className="filed__text">{text}</span>
            <ElInput className={"filed__input "+className2} type={type} onInput={onInput}>    
            </ElInput>
        </label>
    )
}
export default Input;