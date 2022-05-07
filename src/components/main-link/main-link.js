import { Link } from "react-router-dom";
const ElBtn= (...props) => <button {...props}></button>

const LinkMain = ({to, className="", ...props}) => {
   // const Component= () => to ? Link : ElBtn
    return <Link className={"main-link "+ className} to={to} {...props} />
}

export default LinkMain;