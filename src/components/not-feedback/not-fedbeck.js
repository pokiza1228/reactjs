import img from "../../assets/imges/not-feedbeck.png"
import LinkMain from "../main-link/main-link"
import "./not-feedback.scss"
const NotFeedbeck = ()=> {
    return (
        <div className="not-feedback">
            <img className="not-feedback__img" src={img}/>
            <h2 className="not-feedback__title">There is no feedback yet.</h2>
            <p className="not-feedback__text">Got a suggestion? Found a bug that needs to be squashed? We      love hearing about new ideas to improve our app.</p>
            <LinkMain className="not-feedback__link">+ Add Feedback</LinkMain>
        </div>
    )
}
export default NotFeedbeck;