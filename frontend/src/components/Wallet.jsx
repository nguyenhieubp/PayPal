import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
const Wallet = ({ wallet }) => {
  const navigation = useNavigate();
  const token = localStorage.getItem("Token");
  const id = wallet._id;
  const [isDeleteWallet, setIsDeleteWallet] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const [validation, setValidation] = useState("");
  const handleDeleteWallet = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/v1/wallet/deleteWallet/",
        { idWallet: wallet._id, password: password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.reload();
    } catch (error) {
      setValidation(error.response.data.message);
    }
  };

  const handleSendMoney = () => {
    navigation("/sendMoney", { state: id });
  };

  return (
    <>
      {isDeleteWallet && (
        <div
          className="fixed z-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        bg-slate-200  shadow-lg shadow-black-500/100 w-[35rem] p-[2rem] rounded-[3rem]"
        >
          <div onClick={() => setIsDeleteWallet(false)} className="p-4">
            <FaTimes className="absolute top-8 right-8 text-[2.4rem] cursor-pointer "></FaTimes>
          </div>
          <div className="flex flex-col ">
            <div className="flex items-center ">
              <div className="text-blue-500 text-[2rem]">Delete Wallet</div>
            </div>
            <div className="text-red-600 mt-2">ID: {wallet._id}</div>
            <form onSubmit={handleDeleteWallet} className="mt-[3rem]">
              {validation && (
                <div className="text-red-500 mb-4 ">{validation}</div>
              )}
              <div className="relative">
                <input
                  type={showPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  className="border-b-2 text-[2.2rem] mb-[3rem]  pr-20 p-4 w-[100%]"
                />
                {showPassword === "password" && (
                  <FiEyeOff
                    onClick={() => setShowPassword("text")}
                    className="absolute cursor-pointer right-2 top-[0.75rem] text-[2.75rem] text-gray-400  "
                  ></FiEyeOff>
                )}
                {showPassword === "text" && (
                  <FiEye
                    onClick={() => setShowPassword("password")}
                    className="absolute cursor-pointer right-2 top-[0.75rem] text-[2.75rem] text-gray-400  "
                  ></FiEye>
                )}
              </div>
              <button
                onClick={handleDeleteWallet}
                className="bg-red-500 text-[2rem] p-[1rem] text-white w-[50%]  rounded-[3rem]"
                type="submit"
              >
                DELETE
              </button>
            </form>
          </div>
        </div>
      )}
      <div
        key={wallet._id}
        className="border-2 mt-[3rem] border-red-400 p-5  mr-10"
      >
        <div>
          <img
            src="https://brokerchooser.com/uploads/images/digital-banks/monzo-review-bank-card.png"
            alt=""
          />
          <div className="px-[2rem]">
            <div className="mb-3">ID: {wallet._id}</div>
            <div className="mb-3 font-bold">Money:$ {wallet.money}</div>
            <div className="flex mt-10 justify-between items-center">
              <button
                onClick={handleSendMoney}
                className="bg-blue-500 px-8 py-4 text-white"
              >
                SEND
              </button>
              <button
                onClick={() => setIsDeleteWallet(true)}
                className="bg-red-500 px-8 py-4 text-white"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
