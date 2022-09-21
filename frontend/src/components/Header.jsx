import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const token = localStorage.getItem("Token");
  const handleSigOut = () => {
    localStorage.removeItem("Token");
  };
  return (
    <div>
      {!token ? (
        <div className="flex items-center">
          <div className="mr-[3rem]">
            <Link to="/">
              <button className="text-[2.4rem]  ease-out duration-300  py-[1.5rem] px-[3rem] border-[1px] border-black bg-[#15f65c] hover:rounded-[4rem]">
                Login
              </button>
            </Link>
          </div>
          <div>
            <Link to="/register">
              <button className="text-[2.4rem] text-gray-500  py-[1.5rem] px-[3rem] ">
                Register
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="mr-[3rem]">
          <Link to="/">
            <button
              onClick={handleSigOut}
              className="text-[2.4rem]  ease-out duration-300  py-[1.5rem] px-[3rem] border-[1px] border-black bg-[#15f65c] hover:rounded-[4rem]"
            >
              SigOut
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
