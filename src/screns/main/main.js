import { Link } from "react-router-dom"
import FormRadio from "../../components/form-radio/form-radio";
import Title from "../../components/title/title";
import LinkMain from "../../components/main-link/main-link";
import Header from "../../components/header/header";
import CommentWrapper from "../../components/wrapper-comment/wrapper-comment";
import Map from "../../components/map/map";
import "./main.scss"
const Main = () => {
    return (
        <div className="main container">
        {/* <h1>
            Main
        </h1>
        <LinkMain to="/about">About</LinkMain>
        <br/> 
        <LinkMain to="/add-feedback">add-feedback</LinkMain> */}

        <div className="main__title">
            <Title />
            <FormRadio />
            <Map />
        </div>
        <div>
            <Header nomber={6}></Header>
            <CommentWrapper />
        </div>  
        </div>
    )
}

export default Main;