const FeeedbeckComment = ({user,text,username,...prop})=> {
   return <li className="feedback-comment" {...prop}>
        <img/>
        <h3 className="feedback-comment__title">
            {
                user
            }
        </h3>
        <p>@{username}</p>
        <p>{text}</p>
    </li>
}

export default FeeedbeckComment;