import React, { useState } from 'react';


const Post = (props) => {
    console.log(props)
    const [author] = useState(props.p.author);
    const [contenido] = useState(props.p.content); 
    const [likes, setLikes] = useState(props.p.likes);
    const [tags] = useState(props.p.tags);
    const [id] = useState(props.p.id);

    const renderLikes = () => {
        return likes === 0 ? "Give us a like" : likes;
    }

    const handleLike = () => {
        setLikes(likes+1);
    }
    const handleDislike = () => {
        setLikes(likes-1);
    }
    
    return(
        <div className="col" key={id}>
            <h1 className="display-4">Post</h1>
            <h2>Author: {author}</h2>
            <p>{contenido}</p>
            <ul>
                {tags.map((item,i) =>(
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <p>Likes: {renderLikes()}</p>
            <button onClick = {handleLike}>Like</button>
            <button onClick = {handleDislike}>Dislike</button>
            <button onClick = {() => {props.delete(id)}}>Delete</button>

        </div>
    )
}

export default Post;