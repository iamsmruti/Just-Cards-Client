import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1300px] w-[100%] px-4 md:px-0">
        {children}
      </div>
    </div>
  )
}

export default Container