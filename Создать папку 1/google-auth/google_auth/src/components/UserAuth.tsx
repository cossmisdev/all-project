import { useEffect, useState } from "react";
import scss from "./UserAuth.module.scss";
import axios from "axios";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  auth: string;
  login: string;
  password: string;
  isActive: boolean;
  photo: string;
  phone: string;
  isPhoneVerified: boolean;
  traffic: string;
  createdAt: string;
  updatedAt: string;
}

const api = import.meta.env.VITE_URL;

const UserAuth = () => {
  const [user, setUser] = useState<User>();

  const googlelogin = () => {
    window.open(`${api}/api/v1/auth/login/google`, "_self");
  };

  const getMe = async () => {
    const { data } = await axios.get(`${api}/api/v1/auth/user`, {
      withCredentials: true,
    });
    setUser(data.user);
    console.log(data);
    
  };

  const logout = () => {
    window.open(`${api}/api/v1/auth/logout`, "_self");
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div className={scss.User_auth}>
      <h1>UserAuth</h1>
      <h1>
        {user?.firstName}
        {user?.lastName}
      </h1>
      <img src={user?.photo} alt="" />
      <button onClick={googlelogin}>Auth with google</button>
      <button onClick={logout}>log out</button>
    </div>
  );
};

export default UserAuth;
