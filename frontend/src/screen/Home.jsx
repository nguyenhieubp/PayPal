import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import Login from "../components/Login";
import Register from "../components/Register";
const Home = () => {
  const [typeForm, setTypeForm] = useState("Login");
  return (
    <div className="w-[100vw]  h-screen pt-[4rem] ">
      <div className="flex items-start justify-between md:flex md:flex-col-reverse lg:flex lg:flex-row">
        <div className="pl-[10rem] md:0">
          <div className="text-[#3c4ea2] font-bold text-[4rem]">BANK BRI</div>
          <div className="text-[#fcb142] font-bold mt-4 text-[2rem]">
            Internet Backing
          </div>
          <div className="mt-20">
            <div className="my-4 text-gray-600 text-[2.8rem]">{typeForm}</div>
            <div className="text-gray-400">Hello welcome back</div>
          </div>

          {typeForm === "Login" && <Login></Login>}
          {typeForm === "Register" && <Register></Register>}
          <div className="mt-[3rem]">
            <div className="flex items-center mb-[2rem]">
              <div className="p-[1rem] bg-orange-500 rounded-[1rem] items-center ">
                <DiMongodb className="text-[2rem] text-white"></DiMongodb>
              </div>
              <div className="ml-[1rem]">MongoDB</div>
            </div>
            <div className="flex items-center mb-[2rem]">
              <div className="p-[1rem] bg-orange-500 rounded-[1rem] items-center ">
                <SiExpress className="text-[2rem] text-white"></SiExpress>
              </div>
              <div className="ml-[1rem]">Express</div>
            </div>
            <div className="flex items-center mb-[2rem]">
              <div className="p-[1rem] bg-orange-500 rounded-[1rem] items-center ">
                <FaReact className="text-[2rem] text-white"></FaReact>
              </div>
              <div className="ml-[1rem]">React</div>
            </div>
            <div className="flex items-center mb-[2rem]">
              <div className="p-[1rem] bg-orange-500 rounded-[1rem] items-center ">
                <FaNodeJs className="text-[2rem] text-white"></FaNodeJs>
              </div>
              <div className="ml-[1rem]">NodeJs</div>
            </div>
          </div>
        </div>
        <div className="lg:flex flex-col items-end md:block sm:hidden">
          <div className="flex items-center lg:mr-[12rem] md:ml-[8rem]">
            <div onClick={() => setTypeForm("Login")} className="mr-[3rem]">
              <Link to="/">
                <button className="text-[2.4rem]  ease-out duration-300  py-[1.5rem] px-[3rem] border-[1px] border-black bg-[#15f65c] hover:rounded-[4rem]">
                  Login
                </button>
              </Link>
            </div>
            <div onClick={() => setTypeForm("Register")}>
              <Link to="/">
                <button className="text-[2.4rem] text-gray-500  py-[1.5rem] px-[3rem] ">
                  Register
                </button>
              </Link>
            </div>
          </div>
          <div className="mr-[2rem] mt-[10rem]">
            <div className="w-[80rem] h-[40rem] object-cover">
              <img
                className="w-[100%] h-[100%] object-contain "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPl9OoQoikoBDQaTkE_6zchGMmbNYx4rOVNA&usqp=CAU"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
