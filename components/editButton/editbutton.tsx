import { Pencil } from "lucide-react"

const EditButton = ({onClick}) =>{
    return(
        <div>
            <button
  type="button"
  className="lg:w-12 lg:h-10 w-10 h-8 bg-green-600 text-white hover:text-white hover:bg-green-700 p-2 font-bold rounded-md border border-gray-300 flex items-center justify-center"
  onClick={onClick}
>
  <span className="hidden lg:block">Edit</span> 
  <Pencil size={20} className="block lg:hidden" />
</button>
        </div>
    )
}

export default EditButton