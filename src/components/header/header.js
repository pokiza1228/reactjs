import "./header.scss"
import icon from "../../assets/imges/svet.svg"
import Select from "../select/select"
import { useContext, useState } from "react"
import { ProductContext } from "../../App"
const { default: LinkMain } = require("../main-link/main-link")

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



const Header = ({nomber, ...props}) => {
    
    

      const  [isSortOpen,setSortOpen]=useState(false);
      const [sortValue, setSortValue]=useState("1")

      const {setPosts}=useContext(ProductContext);



      const hendalSortClick =()=>{
        setSortOpen(!isSortOpen)
      }
      const hendlChangeClose=(evt)=>{
        const sortValue=evt.target.value
        setSortOpen(false)
        setSortValue(sortValue)

        setPosts( posts=> {
          return (
           {
              ...posts,
              productRequests: posts.productRequests.sort((a,b)=>{
                switch (sortValue) {
                  case "1":
                    return b.upvotes-a.upvotes
                    case "2":
                      return a.upvotes-b.upvotes
                    case "3":
                      return (b.comments?.length||0) - (a.comments?.length||0)
                    case "4":
                      return (a.comments?.length||0) - (b.comments?.length ||0)
                }
              })
          }
          )
        })
      }

    return (
        <header className="header">
            <div className="header__content">
                <img src={icon}/>
                <h2 className="header__title">{nomber} Suggestions</h2>
                <button onClick={hendalSortClick} className="header__sort">Sort by : {
                  sortOptions.find(option=>option.value===sortValue).text
                }</button>
                <Select className={"select--opened"}
                options={sortOptions}
                isOpen={isSortOpen}
                defaultValue="1"
                onChange={hendlChangeClose}
                />
            </div>
            
            {/* sort */}
            <LinkMain className="header__link" to="/add-feedback">+ Add Feedback</LinkMain>
        </header>
    )
}

export default Header;