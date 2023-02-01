
import Todo from "@/components/TodoItems/Todo";



type addNewTodoProps ={
  showTodo:boolean
}

const index = ({showTodo}:addNewTodoProps) => {
  
  
  return (
   
     <section className=" bg-gray-20 mx-auto w-5/6  h-full py-10 ">
   <Todo showTodo ={showTodo} />
    
    </section>

   
  );
};

export default index;
