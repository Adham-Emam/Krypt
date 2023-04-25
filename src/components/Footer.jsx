import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="gradient-bg-footer flex md:justify-center justify-between items-center flex-col p-4 text-white">
      <div className="flex sm:flex-row flex-col justify-between items-center my-4 w-full">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="log" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="mx-2 text-center mb-3 cursor-pointer">Market</p>
          <p className="mx-2 text-center mb-3 cursor-pointer">Exchange</p>
          <p className="mx-2 text-center mb-3 cursor-pointer">Tutorials</p>
          <p className="mx-2 text-center mb-3 cursor-pointer">Wallets</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-sm text-center">Come join us</p>
        <p className="text-sm text-center">info@kryptomastry.com</p>
      </div>
      <div className="sm-[90%] w-full h-[0.25px] bg-gray-400 mt-5"></div>
      <div className="sm-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-sm text-center">@kryptomastry 2023</p>
        <p className="text-sm text-center">All rights reserved</p>
      </div>
    </div>
  );
};
export default Footer;
