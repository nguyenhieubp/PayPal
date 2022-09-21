import axios from "axios";
import React from "react";
import Header from "./Header";
import WalletContainer from "../screen/WalletContainer";
import { AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";
const Detail = () => {
  const token = localStorage.getItem("Token");
  const urlImageCard =
    "https://images.ctfassets.net/2c8e80nprabl/5VyIscQEmRe8C16zzkmkhC/76245ccf53c7c7714f9a3542a920ff97/Cards_Header.png";
  const [nameUserCurrent, setNameUserCurrent] = useState("");

  const getNameCurrent = async () => {
    try {
      const response = await axios.post(
        "/api/v1/auth/userCurrent",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNameUserCurrent(response.data.data.user);
    } catch (error) {
      console.log(error.response.data.name);
    }
  };
  getNameCurrent();
  const [isCreate, setIsCreate] = useState(false);
  const handleCreateWallet = async () => {
    try {
      await axios.post(
        "/api/v1/wallet/create/wallet",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsCreate(true);
    } catch (error) {}
  };
  const fufillCreate = () => {
    setIsCreate(false);
    window.location.reload();
  };
  return (
    <div className="px-[4rem]">
      {isCreate && (
        <div
          className="fixed z-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        bg-slate-200  shadow-lg shadow-black-500/100 w-[60rem] p-[2rem] rounded-[3rem]"
        >
          <div className="flex flex-col ">
            <div className="flex items-center ">
              <div className="text-blue-500 text-[2rem]">
                Create Wallet success
              </div>

              <AiFillCheckCircle className="text-[3rem] ml-[1rem] text-green-500"></AiFillCheckCircle>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              esse ea laudantium ducimus distinctio voluptatibus, est tempore
              expedita rem quae quod veritatis enim, assumenda atque corporis
              neque eum omnis modi!
            </div>
            <button
              onClick={fufillCreate}
              className="w-[50%] ml-[50%] translate-x-[-50%] mt-[4rem] rounded-[1rem] bg-blue-600 py-4 text-white"
            >
              Done
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center">
        {nameUserCurrent && (
          <div className="mx-[2rem] text-[2.8rem] text-blue-500 ">
            Hello, {nameUserCurrent}
          </div>
        )}
        <Header></Header>
      </div>
      <div className="bg-red-400 w-[40rem] flex mt-[5rem] rounded-l-[3rem]">
        <img className="w-[40rem]" src={urlImageCard} alt="" />
        <button
          className="bg-blue-500 p-[2rem]  text-white"
          onClick={handleCreateWallet}
        >
          Create Wallet
        </button>
      </div>
      <WalletContainer></WalletContainer>
    </div>
  );
};

export default Detail;
