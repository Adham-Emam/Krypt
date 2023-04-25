import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const Services = () => {
  const ServiceItem = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-col sm:flex-row text-center sm:text-left items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
      <div
        className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
      >
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-4 text-lg">{title}</h3>
        <p className="mt-2 text-sm md:w-9/12">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="gradient-bg-services text-white mf:p-20 py-12 px-4 flex md:flex-row md:items-center items-start flex-col justify-between ">
      <h2 className="text-3xl sm:text-5xl text-gradient py-1">
        Services that we
        <br /> continue to improve
      </h2>
      <div className="md:mt-0 mt-5">
        <ServiceItem
          color="bg-[#2952e3]"
          icon={<BsShieldFillCheck fontSize={21} />}
          title="Security Guaranteed"
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products."
        />
        <ServiceItem
          color="bg-[#8945f8]"
          icon={<BiSearchAlt fontSize={21} />}
          title="Best exchange rates"
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products."
        />
        <ServiceItem
          color="bg-[#f84550]"
          icon={<RiHeart2Fill fontSize={21} />}
          title="Fastest Transactions"
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products."
        />
      </div>
    </div>
  );
};
export default Services;
