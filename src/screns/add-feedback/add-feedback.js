import { Link } from "react-router-dom"
import LinkMain from "../../components/main-link/main-link";
import Input from "../../components/input/input";
import "./add-feedback.scss"
import { useContext, useRef, useState } from "react";
import { ProductContext } from "../../App";
import Select from "../../components/select/select";


const options =[
    {
        
        text:"Feature",
        value:"1"
    },
    {
        text:"UI",
        value:"2"
    },
    {
        text:"UX",
        value:"3"
    },
    {
        text:"Enhancement",
        value:"4"
    },
    {
        text:"Bug",
        value:"5"
    },
    {
        text:"All",
        value:"6"
    }
]
const Add = () => {

    const {posts, setPosts:setData}=useContext(ProductContext);
    
    const  [isSortOpen,setSortOpen]=useState(false);
    const [sortValue, setSortValue]=useState("1")

    const hendalSortClick =(evt)=>{
        evt.preventDefault();
        setSortOpen(!isSortOpen)
      }

      const hendlChangeClose=(evt)=>{
        evt.preventDefault();
        const sortValue=evt.target.value
        setSortOpen(false)
        setSortValue(sortValue)
      }

    const [titleValue,setTitle]=useState();
    let FeedbackTitle = (evt)=> {setTitle(evt.target.value);}

    const [dValue,setD]=useState();
    let FeedbackD = (evt)=> {setD(evt.target.value);}
    
    let NewArray = {
        ...posts,
        productRequests: [
           ... [{
                "id": Math.floor(Math.random()*1000),
                "title": titleValue,
                "category":  options.find(option=>option.value===sortValue).text,
                "upvotes": 0,
                "status": "planed",
                "description": dValue,
                "comments":[
                    
                ]
            }],
            ...posts.productRequests
        ]
    }
    let Submit=(evt)=> {
        evt.preventDefault();
        setData(NewArray) 
    }
    let reset=(evt)=>{
         evt.target.reset();
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
           <label className="edit__label">
                <h2>Category</h2>
                <p>Choose a category for your feedback</p>
                <button onClick={hendalSortClick} className="edit__options" type="click">{
                  options.find(option=>option.value===sortValue).text
                }</button>
                <Select className={"select--opened"}
                options={options}
                isOpen={isSortOpen}
                defaultValue="1"
                onChange={hendlChangeClose}
                />  
            </label>
            <Input
            className1={"add__filed add__filed--o"}
                className2={"add__filed-input"}
                text={"Include any specific comments on what should be improved, added, etc."}
                h3={"Feedback Detail"}
                type={"text"}
                onInput={FeedbackD}
            />
            <div className="add__link">
                <LinkMain className="add__canel" onClick={reset}> Cancel </LinkMain>
                <LinkMain className="add__add" type="submit" onClick={Submit}> Add Feedback </LinkMain>
            </div>
        </form>
        </>
    ) 
    
}
export default Add;