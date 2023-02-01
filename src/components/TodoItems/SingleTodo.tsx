import { getSinglePost } from "@/hooks/useFetch";

import { useState } from "react";

import SingleTodoElement from "./SingleTodoElement";

import EditTodo from "./EditTodo";



const SingleTodo = () => {

  
 
  const [showEditNewTodo, setShowEditNewTodo] = useState(false)

  const { postData } = getSinglePost()
  

  return (
    <div className="mx-auto flex h-full w-4/5 items-center justify-center">
   <SingleTodoElement title={postData.title}  body={postData.body}   toggleEditTodo ={()=>setShowEditNewTodo(true)}/>
   {showEditNewTodo &&<EditTodo  toggleShowEditTodo ={()=>setShowEditNewTodo(false)} />}
    </div>
  );
};

export default SingleTodo;
