import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../App";
import LinkMain from "../../components/main-link/main-link";
import Comment from "../../components/comment/comment";
import FeeedbeckComment from "../../components/feedback-comment/feedback-comment";
import "./feedback.scss"
import Input from "../../components/input/input";




const Feedback = () => {

    const {posts}=useContext(ProductContext);
    
    const {id} =useParams();
    const obj = posts.productRequests.find(prop => prop.id==id)
    const a=obj.comments ?  obj.comments.length : ""
    console.log(a)
    return (
        <>
        <h1>
             Feedback - {id}
        </h1>
        <Link to="/" >
            <img></img>
            Go Back
        </Link>
        <LinkMain to={"/edit/"+id} className="feedback__edit">Edit Feedback</LinkMain>
        {
        <Comment 
            h3={obj.title} 
            span={obj.category} 
            text={obj.description} 
            id={obj.id}
            up={obj.upvotes}
            comment={a}
            key={obj.id}
        ></Comment>
        }
        <h2>
            {
                a
            } 
            {
                obj.comments ? " Comments" : ""
            }
        </h2>
        <ul>
            {
               // console.log(obj.comments.map(prop=> prop.user.name))
                obj.comments ?  obj.comments.map(prop => <FeeedbeckComment
                user={prop.user.name}
                text={prop.content}
                username={prop.user.username}
                key={prop.id}
                />) : ""
            }
            {/* {
                obj.comments.map(prop => <li>{prop.content}</li>)
            } */}
        </ul>
        <br/>
        <form>
            <Input 
             h3={"Feedback Title"}
             type={"text"}
             
            ></Input>
            <LinkMain className="">Post Comment</LinkMain>
        </form>
        </>
    )
}
export default Feedback;