import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";
import { useState } from "react";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const inputStyles =
  "my-2 w-full rounded-sm p-2 outline-none bg-transparent border-none text-sm white-glassmorphism";

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    setIsLoading(true);
  };

  return (
    <div className="mf:p-20 py-12 px-4 flex justify-center items-between lg:flex-row flex-col">
      <div className="flex flex-1 flex-col mf:mr-10 ">
        <h1 className="text-3xl sm:text-5xl text-gradient py-1">
          Send Crypto <br /> across the world
        </h1>
        <p className="font-light mt-5 mf:w-9/12 w=11/12 text-base">
          Explore the cypto world. Buy and sell crypto currencies easily on
          Krypt.
        </p>
        <button className=" flex items-center justify-center w-fit mt-5 gap-2 text-sm font-semibold py-4 px-7 rounded-full bg-[#2952e3] hover:bg-[#2546bd]">
          <AiFillPlayCircle className="inline text-xl " /> Let's get started
        </button>
        <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
          <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
          <div className={`rounded-tr-2xl sm:rounded-none ${commonStyles}`}>
            Security
          </div>
          <div className={`sm:rounded-tr-2xl  ${commonStyles}`}>Ethereum</div>
          <div className={`sm:rounded-bl-2xl  ${commonStyles}`}>Web 3.0</div>
          <div className={`rounded-bl-2xl sm:rounded-none  ${commonStyles} `}>
            Low fees
          </div>
          <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
        </div>
      </div>
      <div className="flex flex-col  flex-1 items-center justify-center mf:mt-0 mt-10">
        <div className="p-3 rounded-xl sm:h-40 h-36 sm:w-72 w-60 my-5 eth-card white-glassmorphism relative">
          <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
            <SiEthereum fontSize={21} />
          </div>
          <BsInfoCircle fontSize={17} className="absolute top-3 right-3" />
          <p className="font-light text-sm absolute bottom-10">Address</p>
          <p className="font-semi-bold text-lg absolute bottom-3">Ethereum</p>
        </div>
        <div className="p-5 sm:w-96 w-full blue-glassmorphism">
          <input
            type="text"
            placeholder="Address To"
            name="addressTo"
            className={inputStyles}
          />
          <input
            type="number"
            step="0.0001"
            placeholder="Amount (ETH)"
            name="amount"
            className={inputStyles}
          />
          <input
            type="text"
            placeholder="Keyword (GIF)"
            name="keyword"
            className={inputStyles}
          />
          <input
            type="text"
            placeholder="Endter Message"
            name="message"
            className={inputStyles}
          />
          <div className="h-[1px] w-full bg-gray-400 my-2" />
          {isLoading ? (
            <Loader />
          ) : (
            <button
              onClick={handleSubmit}
              className="w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full"
            >
              Send Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Welcome;
