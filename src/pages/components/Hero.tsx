import banner from "../../assets/images/Illustration.svg";
import { Button, SelectionTitle } from "../../components";
import { Frame } from "../../components/Frame";

export const Hero = () => {
  return (
    <div className="bg-backGround mt-6 py-8">
      <Frame classes="justify-between">
        <div>
          <SelectionTitle
            title1="Lessons and insights"
            title2="from 8 years"
            text="Where to grow your business as a photographer: site or social media?"
            sizeTitle="text-6xl  leading-[68px]"
            sizeText="text-lg mt-4"
          />
          <div className="mt-6">
            <Button title="Register" classes="bg-green text-colorWhite " />
          </div>
        </div>

        <img src={banner} alt="" className="w-[400px]" />
      </Frame>
    </div>
  );
};
