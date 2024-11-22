import { Trash2 } from 'lucide-react'
import React from 'react'

const DeleteButton =({onClick})=>{
    return(
      <div
      className="w-9 h-9 my-3 cursor-pointer capitalize rounded-full hover:text-white hover:bg-red-600 p-2 font-bold flex justify-center items-center text-gray-800"
      onClick={onClick}>
      <Trash2 className='hover:text-white' />
    </div>
    )

}

export default DeleteButton