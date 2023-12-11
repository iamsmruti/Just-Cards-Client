import { MdSearch } from "react-icons/md";

const SearchBox = () => {
  return (
    <div className="relative">
      <input className="border-[1px] rounded-md bg-white max-w-[500px] w-[100%] border-black py-2 outline-none pl-10 pr-4" />
      <div>
        <MdSearch className="absolute text-[24px] top-[8px] left-[8px]" />
      </div>
    </div>
  )
}

export default SearchBox