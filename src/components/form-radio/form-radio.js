import "./form-radio.scss"
import Inner from "../inner/inner";
const FormRadio = () => {
    return (
        <form className="sort-by">
            <label className="sort-by__label">
                <input className="sort-by__radio visually-hidden" type={"radio"} name="sort"></input>
                <Inner className="sort-by__inner">All</Inner>
            </label>
            <label className="sort-by__label">
                <input className="sort-by__radio visually-hidden" type={"radio"} name="sort"></input>
                <Inner className="sort-by__inner">UI</Inner>
            </label>
            <label className="sort-by__label">
                <input className="sort-by__radio visually-hidden" type={"radio"} name="sort"></input>
                <Inner className="sort-by__inner">UX</Inner>
            </label>
            <label className="sort-by__label">
                <input className="sort-by__radio visually-hidden" type={"radio"} name="sort"></input>
                <Inner className="sort-by__inner">Enhancement</Inner>
            </label>
            <label className="sort-by__label">
                <input className="sort-by__radio visually-hidden" type={"radio"} name="sort"></input>
                <Inner className="sort-by__inner">Bug</Inner>
            </label>
            <label className="sort-by__label">
                <input className="sort-by__radio visually-hidden" type={"radio"} name="sort"></input>
                <Inner className="sort-by__inner">Feature</Inner>
            </label>
        </form>
    )
}
export default FormRadio;