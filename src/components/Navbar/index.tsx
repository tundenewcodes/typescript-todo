
import { PlusIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


type Props = {
  toggleAddTodo:()=>void
};
const Navbar = ({toggleAddTodo}: Props) => {
  

  const flexBetween = "flex justify-between items-center";
  
  return (
    <nav >
      <div className={`${flexBetween} w-full fixed top-0 z-30  pb-6 `}>
        <div className={`w-5/6 mx-auto h-12 ${flexBetween} bg-gray-300 mb-8  px-4
  `}>
        <Link to='/'><h1 className="italic font-bold text-xl md:text-3xl cursor-pointer inline-flex mr-2">TODO ITEMS <span className="h-4 w-4 ml-1 rounded-full bg-red-400"></span></h1></Link>
        <button onClick={toggleAddTodo} className="inline-flex px-4 py-2 bg-green-600 hover:bg-green-400 text-white text-sm font-medium  cursor-pointer items-center rounded-md ">
          Add todo <PlusIcon className="h-4 w-4 ml-2 font-black text-3xl  text-white "/>
          </button>
          
          </div>

       </div>
   
    </nav>
  );
};

export default Navbar;
