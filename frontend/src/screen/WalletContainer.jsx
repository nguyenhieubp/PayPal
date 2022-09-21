import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Wallet from "../components/Wallet";
const WalletContainer = () => {
  const token = localStorage.getItem("Token");
  const [valueWallet, setValueWallet] = useState([]);
  useEffect(() => {
    const fetchWallet = async () => {
      const response = await axios.post(
        "/api/v1/wallet/getWallet/",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setValueWallet(...[response.data]);
    };
    fetchWallet();
  }, [token]);
  return (
    <div>
      <div className=" text-[2.8rem] mt-[5rem] mb-[2rem]">List wallet</div>
      {Array.isArray(valueWallet) && (
        <div className="lg:grid lg:grid-cols-4  md:grid md:grid-cols-2 ">
          {valueWallet.map((item) => (
            <Wallet key={item._id} wallet={item}></Wallet>
          ))}
        </div>
      )}
    </div>
  );
};

export default WalletContainer;
