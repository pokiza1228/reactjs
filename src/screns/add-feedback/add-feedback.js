import { Link } from "react-router-dom"
import LinkMain from "../../components/main-link/main-link";

const Add = () => {
    return (
        <>
        <LinkMain to="/feedback/:id">/feedback/</LinkMain>
        <br/> 
         <h1>
            Add Feedback
        </h1>
        <LinkMain to="/"> Cancel </LinkMain>
        </>
       
    ) 
}
export default Add;