import { Link } from "react-router-dom"
import LinkMain from "../../components/main-link/main-link";
import Input from "../../components/input/input";
import "./add-feedback.scss"
import { useContext, useRef, useState } from "react";
import { ProductContext } from "../../App";
const Add = () => {

    const {posts}=useContext(ProductContext);
    const [data, setData] =useState(posts.productRequests);
    
    const [titleValue,setTitle]=useState();
    let FeedbackTitle = (evt)=> {setTitle(evt.target.value);}
    

    const [caticoryValue,setCotigory]=useState();
    let FeedbackCategory = (evt)=> {setCotigory(evt.target.value);}

    const [dValue,setD]=useState();
    let FeedbackD = (evt)=> {setD(evt.target.value);}
    
    let NewArray = [
        ...data,
        {
            "id": Math.floor(Math.random()*1000),
            "title": titleValue,
            "category":  caticoryValue,
            "upvotes": 0,
            "status": "planed",
            "description": dValue,
            "comments":[
                ""
            ]
        }
    ]
    console.log(data)
    let Submit=(evt)=> {
        evt.preventDefault();
        setData(NewArray)  
    }
    return (
        <>
        <Link to={"/"}>Go Back</Link>
        <br/> 
        <form  className="add">
             <h1 className="add__title">
                Create New Feedback
            </h1>
            <Input
                className1={"add__filed"}
                text={"Add a short, descriptive headline"}
                h3={"Feedback Title"}
                type={"text"}
                
                onInput={FeedbackTitle}
            />
            <Input
                className1={"add__filed"}
                text={"Choose a category for your feedback"}
                h3={"Category"}
                type={""}
                onInput={FeedbackCategory}
            />
            <Input
            className1={"add__filed add__filed--o"}
                className2={"add__filed-input"}
                text={"Include any specific comments on what should be improved, added, etc."}
                h3={"Feedback Detail"}
                type={"text"}
                onInput={FeedbackD}
            />
            <div className="add__link">
                <LinkMain className="add__canel"> Cancel </LinkMain>
                <LinkMain className="add__add" type="submit" onClick={Submit}> Add Feedback </LinkMain>
            </div>
            
        </form>
        </>
    ) 
    
}
export default Add;