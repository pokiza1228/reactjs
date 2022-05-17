import "./comment.scss"
import Inner from "../inner/inner"
import "../../assets/imges/icon.svg"
import icon from "../../assets/imges/icon.svg"
import { Link } from "react-router-dom"
const Comment = ({span,text,h3,id,up,...props}) => {
    return (
        <li className="comment-item" id={id}>
            <button className="commeny-item__nomber">
                <img className="comment-item__icon" src={icon} />
                <span>{up}</span>
            </button>
            <div className="comment-item__body">
                <Link className="comment-item__link" to={'/feedback/'+id}> 
                 <h3 className="comment-item__title">{h3}</h3>
                </Link>
            <p className="comment-item__text">{text}</p>
            <Inner>{span}</Inner>
            </div>
        </li>
    ) 
}

export default Comment;