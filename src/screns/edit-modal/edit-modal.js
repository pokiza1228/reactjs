import { useContext, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../App";
import Input from "../../components/input/input"
import LinkMain from "../../components/main-link/main-link";
import Select from "../../components/select/select";
import "./edit-modal.scss"

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

const plan =[
    {
        
        text:"Planned",
        value:"1"
    },
    {
        text:"Suggestion",
        value:"2"
    },
    {
        text:"In-Progress",
        value:"3"
    },
    {
        text:"Live",
        value:"4"
    }
]


const Edit =()=>{
    const {id}=useParams();
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

      const  [isOpen,setOpen]=useState(false);
    const [value, setValue]=useState("1")

    const hendalClick =(evt)=>{
        evt.preventDefault();
        setOpen(!isOpen)
      }

      const hendlClose=(evt)=>{
        evt.preventDefault();
        const Value=evt.target.value
        setOpen(false)
        setValue(Value)
      }
    //   const editTitle =useRef();
    //   const input=()=> {
    //     console.log(editTitle.current.value)
    //   }
    const {posts,setPosts}=useContext(ProductContext);
    const post=posts && posts.productRequests.map((post)=>post);
      const edit=post.find((edd)=> edd.id==id);
      console.log(edit)
      let editPost={
          ...posts,
          ...posts.productRequests,
          productRequests:[
              ...[{
                "id": edit.id,
                "title": "titleValue",
                "category": options.find((opt)=>opt.value==sortValue).text ,
                "upvotes": edit.upvotes,
                "status": plan.find((abs)=>abs.value==value).text,
                "description": "",
                "comments":edit.comments
            }]
          ], 
          ...posts.productRequests
      
        
         
          
      }
      const submit=(evt)=>{
        evt.preventDefault();
        setPosts(editPost)
        
    }
      
    return (
        <>
            <Link to={"/"}>Go Back</Link>
            <form className="edit" onSubmit={submit}>
                <h1 className="edit__title">
                Editing ‘Add a dark theme option’
                </h1>
                <Input  className1="edit__label"
               // onInput={input}ref={editTitle}
                h3={"Feedback Title"}
                text={"Add a short, descriptive headline"}
                placeholder={edit.title}
                type={"text"}
                ></Input>
                <label className="edit__label">
                    <h2 className="edit__label-tatile">Category</h2>
                    <p className="edit__label-text">Choose a category for your feedback</p>
                    <button onClick={hendalSortClick} className="edit__options" type="click">{
                   edit.category
                    }</button>
                    <Select className={"select--opened"}
                    options={options}
                    isOpen={isSortOpen}
                    defaultValue={edit.category}
                    onChange={hendlChangeClose}
                    width={"456px"}
                    />  
                </label>

                <label className="edit__label">
                    <h2 className="edit__label-tatile">Update Status</h2>
                    <p className="edit__label-text">Change feature state</p>
                    <button onClick={hendalClick} className="edit__options" type="click">{
                        edit.status
                    }</button>
                    <Select className={"select--opened"}
                    options={plan}
                    isOpen={isOpen}
                    defaultValue={edit.status}
                    onChange={hendlClose}
                    width={"456px"}
                    /> 
                </label>

                <Input
                h3={"Feedback Detail"}
                text={"Include any specific comments on what should be improved, added, etc."}
                placeholder={"It would help people with light sensitivities and who prefer dark"}
                ></Input>
                <div className="edit__btns">
                    <LinkMain className="edit__delet">Delete</LinkMain>
                    <LinkMain className="edit__canel">Cancel</LinkMain>
                    <LinkMain className="edit__btn">Edit Feedback</LinkMain>
                </div>
            </form>
        </>
    )
}

export default Edit;