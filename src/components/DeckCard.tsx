import { MdPlayCircle } from "react-icons/md";

const DeckCard = () => {
  return (
    <div className="h-[400px] border-[1px] border-gray-400 rounded-md bg-slate-200 relative">
      <div className="h-[400px] absolute top-[-2px] left-[-2px] w-[100%] border-[1px] border-gray-400 rounded-md bg-slate-200">
        <div className="h-[400px] absolute flex flex-col items-center justify-center top-[-2px] left-[-2px] w-[100%] border-[1px] border-gray-400 rounded-md bg-slate-200">
          <p className="text-[24px] text-center">Data Structures & Algorithms</p>

          <p className="mt-5 text-sm">45 Cards</p>

          <div className="text-[54px] text-black mt-10 cursor-pointer hover:text-reddish">
            <MdPlayCircle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeckCard