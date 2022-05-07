import { Link } from "react-router-dom"

const Feedback = () => {
    return (
        <>
        <Link to="/about">About</Link>
        <br/> 
         <h1>
            Add Feedback
        </h1>
        <Link to="/"> Cancel </Link>
        </>
       
    ) 
}
export default Feedback;