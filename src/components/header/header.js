import "./header.scss"
const { default: LinkMain } = require("../main-link/main-link")
const Header = ({nomber, ...props}) => {
    return (
        <header className="header">
            <div className="header__content">
                <img src="../../assets/imges/svet.svg"/>
                <h2 className="header__title">{nomber} Suggestions</h2>
            </div>
            
            {/* sort */}
            <LinkMain className="header__link" to="/add-feedback">+ Add Feedback</LinkMain>
        </header>
    )
}

export default Header;