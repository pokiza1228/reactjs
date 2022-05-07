import "./form-radio.scss"
// import Inner from "../inner/inner";
import Radio from "../radio/radio";
const FormRadio = () => {
    return (
        <form className="sort-by">
            <Radio
             label={"sort-by__label"}
             span={"All"}
             input={"sort-by__radio visually-hidden"}
             type={"radio"} 
             name={"sort"}
             />
             <Radio
             label={"sort-by__label"}
             span={"UI"}
             input={"sort-by__radio visually-hidden"}
             type={"radio"} 
             name={"sort"}
             />
             <Radio
             label={"sort-by__label"}
             span={"UX"}
             input={"sort-by__radio visually-hidden"}
             type={"radio"} 
             name={"sort"}
             />
             <Radio
             label={"sort-by__label"}
             span={"Enhancement"}
             input={"sort-by__radio visually-hidden"}
             type={"radio"} 
             name={"sort"}
             />
             <Radio
             label={"sort-by__label"}
             span={"Bug"}
             input={"sort-by__radio visually-hidden"}
             type={"radio"} 
             name={"sort"}
             />
             <Radio
             label={"sort-by__label"}
             span={"Feature"}
             input={"sort-by__radio visually-hidden"}
             type={"radio"} 
             name={"sort"}
             />
            {/* <label className="sort-by__label">
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
            </label> */}
        </form>
    )
}
export default FormRadio;