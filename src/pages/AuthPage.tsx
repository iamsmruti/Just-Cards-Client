import { Link, useNavigate } from "react-router-dom";
import Button from "../components/UIElements/Button";
import Input from "../components/UIElements/Input";
import Logo from "../components/Logo";
import Caraousel from "../components/Carousel";
import { ChangeEvent, useState } from "react";
import useLogin from "../hooks/auth/useLogin";
import { toast } from "react-toastify";
import useAuthStore from "../stores/authStore";

interface AuthPageProps {
  type: String
}

const AuthPage: React.FC<AuthPageProps> = ({ type }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="max-h-[500px] md:max-h-full bg-darkBluish md:h-[100vh]">
        <Caraousel />
      </div>

      <div className="md:h-[100vh] flex items-center">
        {type === "login" && <LoginComponent />}
        {type === "register" && <RegisterComponent />}
      </div>
    </div>
  )
}

export default AuthPage

export const LoginComponent = () => {
  const navigate = useNavigate();
  const authStore = useAuthStore()
  const { login, loading, error, userData } = useLogin();

  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleLogin = async () => {
    setButtonDisabled(true);

    try {
      await login({ loginId, password });
      authStore.login();
      navigate('/');
      toast('success');
    } catch (error) {
      // Handle error, show error message, etc.
      toast.error((error as Error).message);
    } finally {
      setButtonDisabled(false);
    }
  };


  return (
    <div className="flex flex-col justify-center items-center w-[100%] py-[50px] lg:py-0 px-5 lg:px-0">
      <Logo />

      <p className="mt-[50px] text-xl">Login to Start</p>

      <div className="w-[100%] max-w-[400px] mt-5">
        <Input 
          placeholder="" 
          onChange={(e : ChangeEvent<HTMLInputElement>) => setLoginId(e.target.value)} 
          label="Email / Username" 
          type="text" 
        />
        
        <Input 
          placeholder="" 
          onChange={(e : ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          label="Password" 
          type="password" 
        />

        <div className="flex justify-between items-center">
          <Button
            onClick={() => {
              handleLogin()
            }}
            text="Submit"
            type="contained"
            disabled={buttonDisabled || loading}
            gray={false}
          />

          <Link to="/forgot-password">
            <p className="text-[14px] text-reddish">Forgot Password?</p>
          </Link>
        </div>
      </div>

      <div className="mt-[160px] flex">
        <p className="text-[14px]">Don't Have an Account?</p>
        <Link to="/register">
          <p className="text-[14px] text-bluish ml-2">Register</p>
        </Link>
      </div>
    </div>
  );
};

export const RegisterComponent = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col justify-center items-center w-[100%] py-[50px] lg:py-0 px-5 lg:px-0">
      <Logo />

      <p className="mt-[50px] text-xl">Register to Start</p>

      <div className="w-[100%] max-w-[400px] mt-5">
        <Input placeholder="" onChange={() => {}} label="Username" type="text" />
        <Input placeholder="" onChange={() => {}} label="Email" type="email" />
        <Input placeholder="" onChange={() => {}} label="Password" type="password" />

        <div className="flex justify-between items-center">
          <Button
            onClick={() => {
              navigate("/");
            }}
            text="Submit"
            type="contained"
            disabled={false}
            gray={false}
          />
        </div>
      </div>

      <div className="mt-20 flex">
        <p className="text-[14px]">Already Have an Account?</p>
        <Link to="/login">
          <p className="text-[14px] text-bluish ml-2">Login</p>
        </Link>
      </div>
    </div>
  );
};