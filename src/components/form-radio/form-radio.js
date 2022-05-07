
const FormRadio = () => {
    return (
        <form className="sort-bu">
            <label>
            <input className="sort-by__radio" type={"radio"} name="sort"></input>
            All
            </label>
            <label>
            <input className="sort-by__radio" type={"radio"} name="sort"></input>
            UI
            </label>
            <label>
            <input className="sort-by__radio" type={"radio"} name="sort"></input>
            UX
            </label>
            <label>
            <input className="sort-by__radio" type={"radio"} name="sort"></input>
            Enhancement
            </label>
            <label>
            <input className="sort-by__radio" type={"radio"} name="sort"></input>
            Bug
            </label>
            <label>
            <input className="sort-by__radio" type={"radio"} name="sort"></input>
            Feature
            </label>
        </form>
    )
}
export default FormRadio;