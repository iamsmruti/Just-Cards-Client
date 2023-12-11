import { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { useLocation } from "react-router-dom"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const fullPages = ['/login', '/register', '/forgot-password']

  const location = useLocation()

  const invalidPage = fullPages.includes(location.pathname)

  return (
    <div>
      {!invalidPage && <Header />}
      {children}
      {!invalidPage && <Footer />}
    </div>
  )
}

export default Layout