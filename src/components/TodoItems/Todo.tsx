import { getAllPost } from "@/hooks/useFetch";


import NewTodo from "../NewTodo";
import Spinner from "../Spinner";
import Todos from "./Todos";


type addNewTodoProps = {
  showTodo: boolean;
};
const Todo = ({ showTodo }: addNewTodoProps) => {
  const { isPending,  postData } = getAllPost();

 

  return (
    <div className="container mx-auto mt-4">
      <div className="lg:grid-cols-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   ">
        {postData.map((post) => (
          <Todos
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
          />
        ))}
        {isPending && <Spinner/>}
      </div>
      {showTodo && <NewTodo />}
    </div>
  );
};

export default Todo;
