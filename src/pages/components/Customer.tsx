import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../assets/images/image 9.svg";
import { Button, ListBrand, SelectionTitle } from "../../components";
import { Frame } from "../../components/Frame";

export const Customer = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <Frame classes="py-16 my-6">
        <img src={img} alt="" className="mr-8 h-[400px]" />
        <div>
          <SelectionTitle
            title1="Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna."
            title2="Tim Smith"
            text="British Dragon Boat Racing Association"
            sizeTitle="text-base font-normal text-textColor2 tracking-wider leading-7"
            sizeText="text-sm text-[#89939E]"
          />
          <div className="flex justify-start ml-[-30px] mt-6">
            <ListBrand classes="w-[50px]" />
            <Button
              title="Meet all customers"
              icon={<FontAwesomeIcon icon={faArrowRight} />}
              classes="ml-4 text-green"
            />
          </div>
        </div>
      </Frame>
    </div>
  );
};
