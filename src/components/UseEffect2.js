import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UseEffect2() {

    //Using AXIOS method to fetch API
    const[post,setPost]=useState([]);
    const[ini,setini]=useState(0);
   
    useEffect(()=>
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>
            {
                console.log(res)
                setPost(res.data)
            })
        .catch(err=>
            console.log(err)
            )
    },[])
    

  return(
    <>
      <ul style={{listStyle:"none"}}>
        {
            post.map(e=><li key={e.id} >Title {ini} : {e.title}</li>)
            
        }
      </ul>
    </>
  )
}
