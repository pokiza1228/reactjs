import "./comment.scss"
import Inner from "../inner/inner"
import "../../assets/imges/icon.svg"
import icon from "../../assets/imges/icon.svg"
const Comment = ({span,text,h3,id,...props}) => {
    return (
        <li className="comment-item">
            <div className="commeny-item__nomber">
                <img className="comment-item__icon" src={icon} />
                <span>{id}</span>
            </div>
            <div className="comment-item__body">
            <h3 className="comment-item__title">{h3}</h3>
            <p className="comment-item__text">{text}</p>
            <Inner>{span}</Inner>
            </div>
        </li>
    ) 
}

export default Comment;