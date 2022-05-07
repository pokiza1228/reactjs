import "./inner.scss"
const Inner = ({className="", ...props}) => {
    return (
        <span className={"inner " + className} {...props}></span>
    )
}
export default Inner;