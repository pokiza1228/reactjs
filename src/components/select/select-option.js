const SelectOption=({type,className1,className2,className3})=>{
    return(
        <li className={"select__item "+ className1}>
            <label className={"select__label" +className2}>
                <input type={type} className={"select__filed" +className3}></input>
            </label>
        </li>
    )
}

export default SelectOption