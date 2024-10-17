import React from 'react'

const DeleteButton =({onClick})=>{
    return(
        <button
        type="button"
        className="w-24 my-3 items-center capitalize bg-red-600 hover:bg-red-700 text-white p-2 mx-5 font-bold rounded-md"
        onClick={onClick}
      >
        Delete
      </button>  
    )

}

export default DeleteButton