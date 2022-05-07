import { Link } from "react-router-dom";
import LinkMain from "../../components/main-link/main-link";

const About = () => {
    return (
        <>
        <h1>
            About
        </h1>
        <LinkMain to="/" >mainga borish</LinkMain>
        <br/>
        <LinkMain to="/add-feedback">add-feedback</LinkMain>
        </>
    )
}
export default About;