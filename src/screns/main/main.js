import { Link } from "react-router-dom"
import { useContext } from "react"
import FormRadio from "../../components/form-radio/form-radio";
import Title from "../../components/title/title";
import LinkMain from "../../components/main-link/main-link";
import Header from "../../components/header/header";
import CommentWrapper from "../../components/wrapper-comment/wrapper-comment";
import Map from "../../components/map/map";
import "./main.scss"
//const {default: ProductContext} = require("../../App")
import { ProductContext } from "../../App"

const Main = () => {
    const {posts} = useContext(ProductContext);
    let array;
    array= posts && posts.productRequests.map((post) => post.id)
    
    return (
        <div className="main container">
            <div className="main__title">
                <Title />
                <FormRadio />
                <Map />
            </div>
            <div>
                <Header nomber={
                posts ? array.length : ""
                }></Header>
                <CommentWrapper />
            </div>  
        </div>
    )
}

export default Main;