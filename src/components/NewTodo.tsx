import Button from "@/components/Button";

import { Bars3Icon } from "@heroicons/react/24/solid";
import axios from "axios";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";


const NewTodo = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [id, setId] = useState("");
  const [showAddTodo, setShowAddTodo] = useState(true);



  const navigate = useNavigate();

  const data = {
    title,
    body,
    id, userId
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, data)
      .then((res) => {
        console.log(res.data);
        navigate(`/`);
setShowAddTodo(false)
      });
  };
const inputStyles = "text-md m-2 w-4/5 rounded-md  border-2 border-gray-400 py-1 px-2 outline-none"
  return (
    <div className={` ${!showAddTodo && 'hidden' } absolute top-0 left-0 z-10 mt-4 flex h-full w-full items-center  justify-center bg-black bg-opacity-70`}>
 
     <form
        onSubmit={submitHandler}
        className="mx-auto h-[400px] w-3/5 rounded-md bg-white shadow-md"
      >
        <div className="mx-auto flex w-full flex-col items-center justify-center ">
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text"
            placeholder="add id"
            className={inputStyles}
          />
          <input
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            type="text"
            placeholder="add userId"
            className={inputStyles}
          />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="add title"
            className={inputStyles}
          />

          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            cols={20}
            rows={5}
            placeholder="   add todo subject"
            className="ml-2 w-4/5 rounded-md border-2 border-gray-400 p-4  px-2 font-serif text-gray-600 shadow-md outline-none "
          ></textarea>
          <Button
            editTodo={submitHandler}
            text="add new todo"
            Icon={Bars3Icon}
            styles="bg-green-500  mt-4 ml-2 items-start hover:bg-green-200"
          />
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
