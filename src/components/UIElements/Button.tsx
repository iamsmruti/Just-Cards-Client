interface ButtonProps {
  text: String,
  onClick: () => void,
  disabled: boolean,
  type: String,
  gray: boolean
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, type, gray }) => {
  return (
    <>
      {type === 'contained' && (
        <button 
          onClick={onClick} 
          disabled={disabled}
          className={`${!gray ? 'bg-bluish' : 'bg-gray-400'} text-white px-3 py-1 hover:bg-opacity-90`}
        >{text}</button>
      )}
    </>
  )
}

export default Button