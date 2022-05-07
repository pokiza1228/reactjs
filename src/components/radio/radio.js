import "./radio.scss"
import Inner from "../inner/inner";
const Radio = ({label,input ,span,...props}) => {
    return (
        <label className={label}>
            <input className={input} {...props}></input>
            <Inner className="sort-by__inner">{span}</Inner>
        </label>
    )
}
export default Radio;