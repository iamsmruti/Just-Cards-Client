import { ChangeEvent, HTMLInputTypeAttribute } from "react"

interface InputProps {
  label: String,
  placeholder: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  type: HTMLInputTypeAttribute
}

const Input: React.FC<InputProps> = ({ label, placeholder, onChange, type }) => {
  return (
    <div className="my-5">
      <p className="text-[12px]">{label}</p>
      <input 
        type={type}
        placeholder={placeholder} 
        onChange={onChange} 
        className="border-[1px] border-gray-500 w-[100%] px-3 py-2 outline-none"
      />
    </div>
  )
}

export default Input