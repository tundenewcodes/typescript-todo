import Button from "@/components/Button";

import { PostDataTypes } from "@/types";
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'

import {Link } from "react-router-dom";

const Todos = ({ title, body, id }: PostDataTypes) => {
 

  return (
    <Link to={`/${id}`}>
      <div className="card hover:shadow:md m-2  transform cursor-pointer rounded-lg border border-gray-400 transition-all duration-200 hover:-translate-y-1 hover:border-opacity-0">
        <div className="m-3 flex items-center justify-between">
          <h2 className="max-w-3/5 truncate text-xl">{title}</h2>
          <div className="m-3 flex gap-4">
            <Button
              text="edit"
              Icon={PencilSquareIcon}
              styles="bg-orange-500 hover:bg-orange-300"
            />
            <Button
              
              text="delete"
              Icon={TrashIcon}
              styles="bg-red-500 hover:bg-red-300 ml-2 hover:text-white "
            />
          </div>
        </div>
        <p className="truncate p-4 text-justify font-mono text-sm font-light text-gray-700 transition-all duration-200 hover:text-gray-900">
          {body}
        </p>
      </div>
    </Link>
  );
};

export default Todos;
