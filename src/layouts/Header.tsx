import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/images/Logo.svg";
import { Button } from "../components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export const Header = () => {
  return (
    <header className="h-[60px]  w-full  fixed z-10 top-0 bg-[#fff] shadow-md ">
      <nav className=" mx-24 h-full flex  justify-between items-center ">
        <img className="w-[107px]" src={logo} alt="" />
        <div className="flex">
          <div className="flex gap-6">
            <span className="p-[6px] text-textColor font-semibold cursor-pointer">
              Home
            </span>
            <span className="p-[6px] text-textColor font-semibold cursor-pointer">
              Features
            </span>
            <span className="p-[6px] text-textColor font-semibold cursor-pointer">
              Community
            </span>
            <span className="p-[6px] text-textColor font-semibold cursor-pointer">
              Blog
            </span>
          </div>
          <div className="ml-[24px]">
            <Button
              title="Register Now"
              classes="bg-green text-colorWhite"
              icon={<FontAwesomeIcon icon={faArrowRight} />}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
