import "./map-radio.scss"
const MapRadio = ({nomber,className, color,child,...props})=> {
    return (
        <label className="field-radio">
            <span className={"field-radio__color " + color}></span>
            <input className={"visually-hidden field-radio__radio "+ className} {...props}></input>
            <span className="field-radio__text">{child}</span>
            <span className="field-radio__nomber">{nomber}</span>
        </label>
    )
}

export default MapRadio;