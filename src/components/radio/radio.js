const Radio = () => {
    return (
        <label className="sort-by__label">
            <input className="sort-by__radio visually-hidden" type={"radio"} name="sort"></input>
            <Inner className="sort-by__inner">All</Inner>
        </label>
    )
}