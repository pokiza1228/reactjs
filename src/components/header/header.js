import "./header.scss"
import icon from "../../assets/imges/svet.svg"
import Select from "../select/select"
const { default: LinkMain } = require("../main-link/main-link")
const Header = ({nomber, ...props}) => {
    
    const sortOptions = [
        {
          text: "Most upvotes",
          value: "1"
        },
        {
          text: "Least Upvotes",
          value: "2",
        },
        {
          text: "Most Comments",
          value: "3",
        },
        {
          text: "Least Comments",
          value: "4"
        }
      ]

    return (
        <header className="header">
            <div className="header__content">
                <img src={icon}/>
                <h2 className="header__title">{nomber} Suggestions</h2>
                <button className="header__sort">Sort by : {
                  
                }</button>
                <Select />
            </div>
            
            {/* sort */}
            <LinkMain className="header__link" to="/add-feedback">+ Add Feedback</LinkMain>
        </header>
    )
}

export default Header;