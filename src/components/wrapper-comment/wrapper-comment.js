import Comment from "../comment/comment";
import NotFeedbeck from "../not-feedback/not-fedbeck";


const CommentWrapper = () => {
    if (true) {
        return (
            <ul className="comment-wrapper">
                <Comment 
                span={"Enhancement"} 
                text={"Easier to search for solutions based on a specific stack."}
                h3={"Add tags for solutions"}
                id={"99"}
                />
                <Comment 
                span={"Feature"} 
                text={"Easier to search for solutions based on a specific stack."}
                h3={"Add tags for solutions"}
                id={"100"}
                />
                <Comment 
                span={"Enhancement"} 
                text={"Easier to search for solutions based on a specific stack."}
                h3={"Add tags for solutions"}
                id={"99"}
                />
                <Comment 
                span={"Enhancement"} 
                text={"Easier to search for solutions based on a specific stack."}
                h3={"Add tags for solutions"}
                id={"99"}
                />
                <Comment 
                span={"Enhancement"} 
                text={"Easier to search for solutions based on a specific stack."}
                h3={"Add tags for solutions"}
                id={"99"}
                />
                <Comment 
                span={"Enhancement"} 
                text={"Easier to search for solutions based on a specific stack."}
                h3={"Add tags for solutions"}
                id={"99"}
                />
            </ul>
        )
    } else {
        return (
            <NotFeedbeck />
        )
    }
    
}
export default CommentWrapper;