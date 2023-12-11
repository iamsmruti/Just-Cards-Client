interface HeadingProps {
  text: string
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <div className="mt-5 mb-3 w-fit">
      <p className="text-[36px] font-light">{text}</p>
      <div className="h-[3px] w-[50%] bg-darkBluish" />
    </div>
  )
}

export default Heading