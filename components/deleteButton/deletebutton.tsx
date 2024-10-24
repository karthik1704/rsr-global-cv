import { Trash2 } from 'lucide-react'
import React from 'react'

const DeleteButton =({onClick})=>{
    return(
      // <>
      //   <button
      //   type="button"
      //   className="w-24 my-3 items-center capitalize bg-red-600 hover:bg-red-700 text-white p-2 mx-5 font-bold rounded-md"
      //   onClick={onClick}
      // >
      //   Delete
      // </button>  
      // <Trash2 color="#ae0f0f" strokeWidth={3} absoluteStrokeWidth />
      // </>
      <div
      className="w-10 my-3 cursor-pointer capitalize bg-red-600 hover:bg-red-700 text-white p-2 mx-5 font-bold rounded-md flex justify-center items-center"
      onClick={onClick}>
      <Trash2 color="#ffffff" absoluteStrokeWidth />
    </div>
    )

}

export default DeleteButton