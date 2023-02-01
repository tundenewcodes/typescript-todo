import Button from '@/components/Button'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import axios from 'axios'

import { useNavigate, useParams } from 'react-router-dom'

type Props = {title:string, body:string, toggleEditTodo:()=>void}

const SingleTodoElement = ({title, body, toggleEditTodo}: Props) => {
  const {id} = useParams()
  const navigate = useNavigate();


  const DeletePost = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    navigate("/");
  };




  return (
    <div className="card hover:shadow:md  m-2  transform cursor-pointer rounded-lg border border-gray-400 transition-all duration-200 hover:-translate-y-1 hover:border-opacity-0">
    <div className="m-3 flex items-center justify-between">
      <h2 className="max-w-3/5 text-2xl ">{title}</h2>
      <div className="m-3 flex gap-4">
        <Button
       editTodo={toggleEditTodo}
          text="edit"
          Icon={PencilSquareIcon}
          styles="bg-orange-500 hover:bg-orange-300"
        />
        <Button
        editTodo={DeletePost}
          text="delete"
          Icon={TrashIcon}
          styles="bg-red-500 hover:bg-red-300  hover:text-white "
        />
      </div>
    </div>
    <p className="p-4  text-justify font-mono text-lg font-light text-gray-700 transition-all duration-200 hover:text-gray-900 md:text-xl">
      {body}
    </p>
  </div>
  )
}

export default SingleTodoElement