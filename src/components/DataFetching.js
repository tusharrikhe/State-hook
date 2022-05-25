import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(response=>{
            console.log(response)
            setPost(response.data)
            .catch(error=>{
                console.log(error)
            })
        })
    },[idFromButton])

    const handleButtonClick = ()=>{
        setIdFromButton(id)
    }
  return (
    <div>
    <input type = "text" value={id} onChange={(e)=>setId(e.target.value)}/>
    <button type='button' onClick={handleButtonClick}>Fetch Posts</button>
        <ul>
    <h2>{posts.title}</h2>
    {/* {
        posts.map(post=>{
         return   <li key={post.id}>{post.title}</li>
        })
    } */}

        </ul>
    </div>
  )
}

export default DataFetching
