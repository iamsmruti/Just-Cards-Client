import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NewDeckCard = () => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate('/new-deck')} className="group h-[400px] flex justify-center items-center border-[1px] border-gray-400 cursor-pointer rounded-md bg-slate-200 hover:bg-opacity-70 relative">
      <FaPlus className="text-[54px] text-black group-hover:opacity-70" />
    </div>
  )
}

export default NewDeckCard