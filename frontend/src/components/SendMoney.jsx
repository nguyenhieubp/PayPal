import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Alert from "./Alert";
const SendMoney = () => {
  const location = useLocation();
  const token = localStorage.getItem("Token");
  const id = location.state;
  const [idWalletTake, setIdWalletTake] = useState("");
  const [numberMoneySend, setNumberMoneySend] = useState();
  const [validation, setValidation] = useState("");
  const [dateSend, setDateTime] = useState("");
  const [alert, setAlert] = useState(false);
  const handleSendMoney = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/api/v1/wallet/sendMoney?send=${id}&take=${idWalletTake}`,
        {
          numberMoneySend: Number(numberMoneySend),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDateTime(response.data.date);
      setAlert(true);
    } catch (error) {
      setValidation(error.response.data.message);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-red-300">
      {alert ? (
        <Alert
          numberMoneySend={numberMoneySend}
          dateSend={dateSend}
          idWalletTake={idWalletTake}
        ></Alert>
      ) : (
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50rem] bg-white px-[4rem] py-[2rem] pt-[5rem]">
          <h1 className="text-center mb-[4rem] text-[#4c5a88] font-bold text-[2.8rem]">
            Send money
          </h1>
          <form onSubmit={handleSendMoney}>
            <h3 className=" text-red-500 mb-[2rem]">{validation}</h3>
            <div>ID</div>
            <input
              onChange={(e) => setIdWalletTake(e.target.value)}
              value={idWalletTake}
              className="border-b-2 text-[2.2rem] mb-[3rem] w-[100%] pr-14"
              type="text"
            />
            <br />
            <div>Number money send</div>
            <input
              onChange={(e) => setNumberMoneySend(e.target.value)}
              value={numberMoneySend}
              className="border-b-2 text-[2.2rem] mb-[3rem] w-[100%] pr-14"
              type="number"
            />

            <br />
            <button
              className="bg-blue-500 text-[2rem] p-[1rem] text-white w-[100%] rounded-[3rem]"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SendMoney;
