import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import axios from "axios";
const Register = () => {
  const navigation = useNavigate();
  const [showPassword, setShowPassword] = useState("password");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    if (name.length < 1) {
      setValidation("Name short");
      return;
    }
    if (!email.includes("@gmail.com")) {
      setValidation("Not validation email");
      return;
    }
    if (password.length < 8) {
      setValidation("Password can length then 8");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/register",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      const { token } = response.data;
      localStorage.setItem("Token", token);
      navigation("/options");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {}
  };
  return (
    <div className="flex  ">
      <form onSubmit={handleRegister}>
        <h3 className=" text-red-500 my-[2rem]">{validation}</h3>
        <div className="relative">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name"
            className="border-b-2 text-[2.2rem] mb-[3rem] w-[30rem] pr-14"
            type="text"
          />
          <FiUser className="absolute right-2 top-[-0.5rem] text-[2.5rem] text-gray-400  "></FiUser>
        </div>
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
