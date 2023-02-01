import Button from "@/components/Button";

import { PencilSquareIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import  { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
  toggleShowEditTodo:()=>void
};

const EditTodo = ({toggleShowEditTodo}: Props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setuserId] = useState("");
  const [id, setId] = useState("");
 
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${slug}`)
      .then((response) => {
        setBody(response.data.body);
        setTitle(response.data.title);
        setuserId(response.data.userId);
        setId(response.data.id);
      });
  }, []);

  const data = {
    title,
    body, id, userId
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

  

    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${slug}`, data)
      .then((res) => {
        console.log(res.data);
        navigate(`/`);
        toggleShowEditTodo
      });
  };

  return (
    <div className=" absolute top-0 left-0 z-10 mt-4 flex h-full w-full items-center  justify-center bg-black bg-opacity-70">
      <form
        onSubmit={submitHandler}
        className="mx-auto h-[400px] w-3/5 rounded-md bg-white shadow-md"
      >
        <div className="mx-auto flex w-full flex-col items-center justify-center ">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="add title"
            className="text-md m-2 w-4/5 rounded-md  border-2 border-gray-400 py-1 px-2 outline-none"
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            cols={30}
            rows={10}
            placeholder="   add todo subject"
            className="ml-2 w-4/5 rounded-md border-2 border-gray-400 p-4  px-2 font-serif text-gray-600 shadow-md outline-none "
          ></textarea>
          <Button
            editTodo={submitHandler}
            text="edit todo"
            Icon={PencilSquareIcon}
            styles="bg-green-500  mt-4 ml-2 items-start hover:bg-green-200"
          />
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
