import { Link } from "react-router-dom"
import LinkMain from "../../components/main-link/main-link";
import Input from "../../components/input/input";
import "./add-feedback.scss"
const Add = () => {
    return (
        <>
        <Link to={"/"}>Go Back</Link>
        <br/> 
        <form className="add">
             <h1 className="add__title">
                Create New Feedback
            </h1>
            <Input
                className1={"add__filed"}
                text={"Add a short, descriptive headline"}
                h3={"Feedback Title"}
                type={"text"}
            />
            <Input
                className1={"add__filed"}
                text={"Choose a category for your feedback"}
                h3={"Category"}
                type={""}
            />
            <Input
            className1={"add__filed add__filed--o"}
                className2={"add__filed-input"}
                text={"Include any specific comments on what should be improved, added, etc."}
                h3={"Feedback Detail"}
                type={"text"}
            />
            <div className="add__link">
                <LinkMain className="add__canel"> Cancel </LinkMain>
                <LinkMain className="add__add"> Add Feedback </LinkMain>
            </div>
            
        </form>
        </>
       
    ) 
}
export default Add;