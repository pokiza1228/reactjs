import { Link } from "react-router-dom"
import FormRadio from "../../components/form-radio/form-radio";
import Title from "../../components/title/title";
import LinkMain from "../../components/main-link/main-link";
import Header from "../../components/header/header";
const Main = () => {
    return (
        <>
        <h1>
            Main
        </h1>
        <LinkMain to="/about">About</LinkMain>
        <br/> 
        <LinkMain to="/add-feedback">add-feedback</LinkMain>
            <Header nomber={6}></Header>
            <Title />
            <FormRadio />
        </>
    )
}

export default Main;