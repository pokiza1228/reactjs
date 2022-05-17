import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../App";
import LinkMain from "../../components/main-link/main-link";
import Comment from "../../components/comment/comment";
import "./feedback.scss"




const Feedback = () => {

    const {posts}=useContext(ProductContext);
    
    const {id} =useParams();
    const obj = posts.productRequests.find(prop => prop.id==id)
    return (
        <>
        <h1>
             Feedback - {id}
        </h1>
        <Link to="/" >
            <img></img>
            Go Back
        </Link>

        {
        <Comment 
            h3={obj.title} 
            span={obj.category} 
            text={obj.description} 
            id={obj.id}
            up={obj.upvotes}
            key={obj.id}
        ></Comment>
        }

        <br/>
        <LinkMain to="/add-feedback">add-feedback</LinkMain>
        <LinkMain to={"/edit/"+id} className="feedback__edit">Edit Feedback</LinkMain>
        </>
    )
}
export default Feedback;