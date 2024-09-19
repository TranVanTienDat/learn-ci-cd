import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../../assets/images/image 18.png";
import img2 from "../../assets/images/image 19.png";
import img3 from "../../assets/images/image 20.png";
import { Button, Heading } from "../../components";
export const CommunityUpdate = () => {
  return (
    <div className="py-16 my-6">
      <div className="text-center mx-24">
        <Heading
          title="Caring is the new marketing"
          text="The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​"
        />
        <div className="flex justify-between  mt-6">
          <div className="pb-10 relative ">
            <img src={img1} alt="" className="w-[350px]" />
            <div className="absolute flex flex-col bottom-0 p-4 mx-6 bg-[#F5F7FA] rounded-md shadow-md">
              <h3 className="text-lg text-textColor2 font-semibold">
                Creating Streamlined Safeguarding Processes with OneRen
              </h3>
              <Button
                title="Readmore"
                icon={<FontAwesomeIcon icon={faArrowRight} />}
                classes="mt-4 text-green"
              />
            </div>
          </div>
          <div className="pb-10 relative ">
            <img src={img2} alt="" className="w-[350px]" />
            <div className="absolute flex flex-col bottom-0 p-4 mx-6 bg-[#F5F7FA] rounded-md shadow-md">
              <h3 className="text-lg text-textColor2 font-semibold">
                What are your safeguarding responsibilities and how can you
                manage them?
              </h3>
              <Button
                title="Readmore"
                icon={<FontAwesomeIcon icon={faArrowRight} />}
                classes="mt-4 text-green"
              />
            </div>
          </div>
          <div className="pb-10 relative ">
            <img src={img3} alt="" className="w-[350px]" />
            <div className="absolute flex flex-col bottom-0 p-4 mx-6 bg-[#F5F7FA] rounded-md shadow-md">
              <h3 className="text-lg text-textColor2 font-semibold">
                Revamping the Membership Model with Triathlon hello Australia
              </h3>
              <Button
                title="Readmore"
                icon={<FontAwesomeIcon icon={faArrowRight} />}
                classes="mt-4 text-green"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
