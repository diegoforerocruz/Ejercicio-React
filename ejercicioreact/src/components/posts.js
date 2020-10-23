import React, { useState } from 'react';
import Post from './post'

const Posts = () => {
    const [posts, setPosts] = useState([
        {
            author: "ahahaha",
            content: "contenido",
            likes: 25,
            tags: ["tag1","tag2","tag3"],
            id:1
        },
        {
            author: "puro",
            content: "mas puro",
            likes: 15,
            tags: ["tag1","tag2","tag3"],
            id:2
        },
        {
            author: "Alfredo",
            content: "contenido alfredo",
            likes: 30,
            tags: ["tag1","tag2","tag3"],
            id:3
        },
    ])

    const handleDeletePost = (id) => {
        console.log("se borra el post "+id);
        const postsFiltrados = posts.filter((p) => p.id !== id );
        setPosts(postsFiltrados)

    }

    return(
        <div className="container row">
            {posts.map(post => (
                <div >
                    <Post key={post.id} p={post} delete={handleDeletePost}/>
                </div>
            ))}
        </div>
    )
}

export default Posts;