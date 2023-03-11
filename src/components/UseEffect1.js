import React, { useEffect, useState } from 'react'

export default function UseEffect1() {
    const[post,setPost]=useState([]);

    //Using normal FECTCH method to pass api;
    useEffect(()=>
    {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then((json=>setPost(json)))
    },[])

  return (
    <>
      <ul>
        {
            post.map(e=><li key={e.id}>{e.title}</li>)
        }
      </ul>
    </>
  )
}
