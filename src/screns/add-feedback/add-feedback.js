import { Link } from "react-router-dom"
import LinkMain from "../../components/main-link/main-link";

const Feedback = () => {
    return (
        <>
        <LinkMain to="/about">About</LinkMain>
        <br/> 
         <h1>
            Add Feedback
        </h1>
        <LinkMain to="/"> Cancel </LinkMain>
        </>
       
    ) 
}
export default Feedback;