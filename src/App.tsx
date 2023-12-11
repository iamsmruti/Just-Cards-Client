import { BrowserRouter, Routes, Route } from "react-router-dom"

// Page Imports
import Home from "./pages/Home"
import AuthPage from "./pages/AuthPage"
import ForgotPassword from "./pages/ForgotPassword"

import Layout from "./components/Layout"
import ProtectedRoute from "./components/ProtectedRoute"
import Decks from "./pages/Decks"
import NewDeck from "./pages/Decks/NewDeck"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<AuthPage type={"login"}/>} />
          <Route path="/register" element={<AuthPage type={"register"}/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/decks" element={<Decks />} />
            <Route path="/new-deck" element={<NewDeck />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App