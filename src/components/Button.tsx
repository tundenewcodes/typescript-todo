import React from 'react'

type ButtonProps = {
    Icon: React.ElementType,
    styles:string, text:string, editTodo?:(e?:any)=>void}

const Button = ({Icon, styles, text, editTodo}: ButtonProps) => {
  return (
    <button onClick={editTodo} type='button' className={` ${styles} inline-flex p-1  text-gray-300 text-sm font-medium  cursor-pointer items-center rounded-md `}>
    {text} <Icon className="h-4 w-4 ml-2"/>
    </button>
  )
}

export default Button