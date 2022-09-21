import axios from "axios";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const navigation = useNavigate();
  const [showPassword, setShowPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState("");
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("Token", token);
      navigation("/options");
      setEmail("");
      setPassword("");
    } catch (error) {
      setValidation(error.response.data.message);
    }
  };
  return (
    <div className="flex  mt-[2rem] ">
      <form onSubmit={handleLogin}>
        <h3 className=" text-red-500 mb-[2rem]">{validation}</h3>
        <div className="relative">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            className="border-b-2 text-[2.2rem] mb-[3rem] w-[30rem] pr-14"
            type="text"
          />
          <AiOutlineMail className="absolute right-2 top-[-0.5rem] text-[2.5rem] text-gray-400  "></AiOutlineMail>
        </div>
        <br />
        <div className="relative">
          <input
            type={showPassword}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className="border-b-2 text-[2.2rem] mb-[3rem] w-[30rem] pr-14"
          />
          {showPassword === "password" && (
            <FiEyeOff
              onClick={() => setShowPassword("text")}
              className="absolute cursor-pointer right-2 top-[-0.5rem] text-[2.5rem] text-gray-400  "
            ></FiEyeOff>
          )}
          {showPassword === "text" && (
            <FiEye
              onClick={() => setShowPassword("password")}
              className="absolute cursor-pointer right-2 top-[-0.5rem] text-[2.5rem] text-gray-400  "
            ></FiEye>
          )}
        </div>

        <button
          className="bg-blue-500 text-[2rem] p-[1rem] text-white w-[100%] rounded-[3rem]"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
