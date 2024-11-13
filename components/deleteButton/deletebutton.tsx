import { Trash2 } from 'lucide-react'
import React from 'react'

const DeleteButton =({onClick})=>{
    return(
      <div
      className="w-10 my-3 cursor-pointer capitalize bg-red-600 hover:bg-red-700 text-white p-2 mx-5 font-bold rounded-md flex justify-center items-center"
      onClick={onClick}>
      <Trash2 color="#ffffff" absoluteStrokeWidth />
    </div>
    )

}

export default DeleteButton