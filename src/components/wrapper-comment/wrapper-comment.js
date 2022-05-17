import { useContext, useEffect,useState} from "react";
import { ProductContext } from "../../App";
import Comment from "../comment/comment";
import NotFeedbeck from "../not-feedback/not-fedbeck";

const CommentWrapper = () => {
    const {posts}=useContext(ProductContext);
    
    return ( 
    <ul className="comment-wrapper"> 
      {
      posts && posts.productRequests.map((post) => <Comment 
      h3={post.title} 
      span={post.category} 
      text={post.description} 
      id={post.id}
      up={post.upvotes}
      key={post.id}>
      </Comment>)
      }
    </ul> 
    )
     // <NotFeedbeck />
}
export default CommentWrapper;