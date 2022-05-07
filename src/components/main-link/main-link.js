import { Link } from "react-router-dom";
import "./main-link.scss"
const ElBtn= (props) => <button {...props} />

const LinkMain = ({to, className="", ...props}) => {
    const Component= to ? Link : ElBtn
    return <Component className={"main-link "+ className} to={to} {...props} />
}

export default LinkMain;