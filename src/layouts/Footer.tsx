import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/images/Logo1.svg";
import { Button } from "../components";
import { Frame } from "../components/Frame";

export const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-semibold text-[#263238] text-center">
          Pellentesque suscipit
          <br />
          fringilla libero eu.
        </h1>
        <Button
          title="Get a Demo"
          icon={<FontAwesomeIcon icon={faArrowRight} />}
          classes="mt-6 bg-green text-colorWhite"
        />
      </div>
      <div className=" bg-[#263238] mt-6">
        <Frame classes="justify-between p-8">
          <div>
            <img src={logo} alt="" className="w-36" />
            <p className="my-8 text-lg text-colorWhite">
              Copyright © 2020 Landify UI Kit.
              <br />
              All rights reserved
            </p>
            <div>
              {/* <FontAwesomeIcon icon={faIntagr} />
            <FontAwesomeIcon icon={} />
            <FontAwesomeIcon icon={} /> */}
            </div>
          </div>
          <div className="flex gap-8">
            <div>
              <h4 className="text-colorWhite text-2xl font-semibold cursor-pointer">
                Company
              </h4>
              <ul className="mt-3">
                <li className="text-lg text-colorWhite p-2 cursor-pointer">
                  Blog
                </li>
                <li className="text-lg text-colorWhite p-2 cursor-pointer">
                  Contact us
                </li>
                <li className="text-lg text-colorWhite p-2 cursor-pointer">
                  Pricing
                </li>
                <li className="text-lg text-colorWhite p-2 cursor-pointer">
                  Testimonials
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-colorWhite text-2xl font-semibold cursor-pointer">
                Company
              </h4>
              <ul className="mt-3">
                <li className="text-lg text-colorWhite p-2 cursor-pointer">
                  Blog
                </li>
                <li className="text-lg text-colorWhite p-2 cursor-pointer">
                  Contact us
                </li>
                <li className="text-lg text-colorWhite p-2 cursor-pointer">
                  Pricing
                </li>
                <li className="text-lg text-colorWhite p-2 cursor-pointer">
                  Testimonials
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-colorWhite text-2xl font-semibold">
                Stay up to date
              </h4>
              <div className="mt-5 relative">
                <input
                  placeholder="Your email address"
                  className=" p-4 w-[300px] rounded-lg bg-[#515B60] text-[#D9DBE1]"
                />
                <FontAwesomeIcon
                  className="absolute inset-y-1/2 translate-y-[-50%] right-6 text-lg  text-colorWhite outline-none border-none"
                  icon={faPaperPlane}
                />
              </div>
            </div>
          </div>
        </Frame>
      </div>
    </div>
  );
};
