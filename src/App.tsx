
import Home from '@/pages/Home'
import Navbar from '@/components/Navbar'
import {Routes, Route} from 'react-router-dom'
import SingleTodo from './components/TodoItems/SingleTodo';
import { useState } from 'react';

function App() {
  const [showAddTodo, setShowAddTodo] = useState(false)
  const [showEditTodo, setShowEditTodo] = useState(false)

  return (
    <div className="app bg-gray-20">
    <Navbar  toggleAddTodo={()=>setShowAddTodo(true)} />
    <Routes>
      <Route  path='/' element={ <Home showTodo={showAddTodo} />} />
      <Route  path='/:slug' element={ <SingleTodo   />} />
    </Routes>
     
     
     
    </div>
  );
}

export default App
