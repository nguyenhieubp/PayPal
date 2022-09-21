import React from "react";
import dateformat from "dateformat";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Alert = (props) => {
  const navigation = useNavigate();
  const { numberMoneySend, dateSend, idWalletTake } = props;
  const date = dateformat(dateSend, "dddd, mmmm dS, yyyy, h:MM:ss ");

  return (
    <div>
      <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-[#11111182]"></div>
      <div className="fixed z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50rem] bg-white px-[3rem] py-[2rem]">
        <div className="flex items-center">
          <div className="text-red-600 font-bold text-4xl">Send Success</div>
          <div className="bg-green-600 p-[1rem] rounded-full ml-8">
            <FaCheck color="white"></FaCheck>
          </div>
        </div>
        <div className="mt-5">
          <div className="mb-4">Number money sended: ${numberMoneySend}</div>
          <div className="mb-4">ID Take: {idWalletTake}</div>
          <div className="mb-4">Time send: {date}</div>
        </div>
        <button
          onClick={() => navigation("/options")}
          className="w-[8rem] p-4
         bg-blue-600 text-white "
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Alert;
