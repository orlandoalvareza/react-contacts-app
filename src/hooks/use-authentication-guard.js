import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../context/auth-context";

const useAuthenticationGuard = () => {
  const { isAuthenticated } =  useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated])
} 

export default useAuthenticationGuard;