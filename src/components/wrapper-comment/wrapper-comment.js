import { useEffect,useState} from "react";
import Comment from "../comment/comment";
import NotFeedbeck from "../not-feedback/not-fedbeck";

const CommentWrapper = () => {
    const [ posts, setPosts ] = useState();
    useEffect(()=>{
        fetch('/data.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      
    },[]);
    return ( 
    <ul className="comment-wrapper"> 
      {
      posts && posts.productRequests.map((post) => <Comment h3={post.title} span={post.category} text={post.description} id={post.upvotes}></Comment>)
      }
    </ul> 
    )
     // <NotFeedbeck />
}
export default CommentWrapper;