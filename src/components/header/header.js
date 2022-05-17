import "./header.scss"
import icon from "../../assets/imges/svet.svg"
const { default: LinkMain } = require("../main-link/main-link")
const Header = ({nomber, ...props}) => {
    

    return (
        <header className="header">
            <div className="header__content">
                <img src={icon}/>
                <h2 className="header__title">{nomber} Suggestions</h2>
                <button className="header__sort">Sort by : {}</button>
            </div>
            
            {/* sort */}
            <LinkMain className="header__link" to="/add-feedback">+ Add Feedback</LinkMain>
        </header>
    )
}

export default Header;