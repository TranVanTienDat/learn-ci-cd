import { SelectionTitle } from ".";
import club from "../assets/images/club.svg";
import event from "../assets/images/event.svg";
import member from "../assets/images/member.svg";
import payment from "../assets/images/payment.svg";
import { Frame } from "./Frame";
export const Achievements = () => {
  return (
    <div className="py-16 my-6 ">
      <Frame classes="justify-between">
        <SelectionTitle
          title1="Helping a local"
          title2="business reinvent itself"
          text="We reached here with our hard work and dedication"
          sizeTitle="text-3xl  leading-9"
          sizeText="text-lg mt-[10px]"
        />
        <div className="flex">
          {/* p1 */}
          <div className="mr-14">
            <div className="flex justify-center items-center">
              <img src={member} alt="" className="w-[60px]" />
              <div className="flex flex-col ml-3">
                <span className="text-4xl font-semibold text-textColor">
                  2,245,341
                </span>
                <span className="text-lg  text-textColor">Members</span>
              </div>
            </div>
            <div className="flex justify-center items-center mt-8">
              <img src={event} alt="" className="w-[60px]" />
              <div className="flex flex-col ml-3">
                <span className="text-4xl font-semibold text-textColor">
                  828,867
                </span>
                <span className="text-lg  text-textColor">Event Bookings</span>
              </div>
            </div>
          </div>

          {/* p2 */}
          <div className="mr-14">
            <div className="flex justify-center items-center">
              <img src={club} alt="" className="w-[60px]" />
              <div className="flex flex-col ml-3">
                <span className="text-4xl font-semibold text-textColor">
                  46,328
                </span>
                <span className="text-lg  text-textColor">Clubs</span>
              </div>
            </div>
            <div className="flex justify-center items-center mt-8">
              <img src={payment} alt="" className="w-[60px]" />
              <div className="flex flex-col ml-3">
                <span className="text-4xl font-semibold text-textColor">
                  1,926,436
                </span>
                <span className="text-lg  text-textColor">Payments</span>
              </div>
            </div>
          </div>
        </div>
      </Frame>
    </div>
  );
};
