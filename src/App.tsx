import { BrowserRouter, Routes, Route } from "react-router-dom"

// Page Imports
import Home from "./pages/Home"
import AuthPage from "./pages/AuthPage"
import ForgotPassword from "./pages/ForgotPassword"

import Layout from "./components/Layout"
import ProtectedRoute from "./components/ProtectedRoute"
import Decks from "./pages/Decks"
import NewDeck from "./pages/Decks/NewDeck"

import useUserData from "./hooks/auth/useCheckAuth"
import { useEffect } from "react"
import useAuthStore from "./stores/authStore"
import RedirectRoute from "./components/RedirectRoute"

const App = () => {
  const { fetchUserData } = useUserData();
  const authStore = useAuthStore()

  const checkAuth = async () => {
    try {
      await fetchUserData();
    } catch (error) {
      console.error("Error checking authentication:", error);
    }
  };

  useEffect(() => {
    checkAuth();
    console.log(authStore.isLoggedIn)
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<RedirectRoute />}>
            <Route path="/login" element={<AuthPage type={"login"}/>} />
            <Route path="/register" element={<AuthPage type={"register"}/>} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>
          
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