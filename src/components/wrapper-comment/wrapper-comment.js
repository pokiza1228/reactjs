import { useContext, useEffect,useParams, useState} from "react";
import { ProductContext } from "../../App";
import Comment from "../comment/comment";
import NotFeedbeck from "../not-feedback/not-fedbeck";

const CommentWrapper = () => {
    const {posts}=useContext(ProductContext);

    // const [data, setData]=useState(posts);
    // let Func= ()=>{setData(posts)}

    
    return ( 
    <ul className="comment-wrapper"> 
      {
      posts && posts.productRequests.map((post) =>{ 
      const a=  post.comments && post.comments.length
      return <Comment 
      h3={post.title} 
      span={post.category} 
      text={post.description} 
      id={post.id}
      up={post.upvotes}
      comment={a}
      key={post.id}>
      </Comment>})
      }
    </ul> 
    )
     //&& <NotFeedbeck />
}
export default CommentWrapper;