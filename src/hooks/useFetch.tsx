import { PostDataTypes } from '@/types';

import axios from 'axios';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const initialPostState = {
  id:'',
  title:'',
  body:'',
  userId:''
  
}

export const getAllPost = ()=>{
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState('');
  const [postData, setpostData] = useState<Array<PostDataTypes>>([]);

useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(
    (res) =>{
      setpostData(res.data)
      setIsPending(false);
    console.log(res.data)
    }
  )
.catch((err:Error)=>{
    if (err.name === "AbortError") {
      setError(err.message);
      console.error("Fetch Aborted.");
      throw Error("Fetch Aborted.");
    } else {
      setError(err.message);
      throw Error("An error occurred while trying to fetch from the remote server.");
    }
  })
},[])

 
return{isPending, error, postData}
}
export const getSinglePost = ()=>{
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState('');
  const [postData, setpostData] = useState<PostDataTypes>(initialPostState);
  const {slug} = useParams()

useEffect(()=>{
 
  axios.get(`https://jsonplaceholder.typicode.com/posts/${slug}`)
  .then(
    (res) =>{
      setpostData(res.data)
      setIsPending(false);
    console.log(res.data)
    }
  ).catch((err:Error)=>{
    if (err.name === "AbortError") {
      setError(err.message);
      console.error("Fetch Aborted.");
      throw Error("Fetch Aborted.");
    } else {
      setError(err.message);
      throw Error("An error occurred while trying to fetch from the remote server.");
    }
  })
},[])

 
return{isPending, error, postData}
}

