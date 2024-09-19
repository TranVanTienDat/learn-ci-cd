import { Button, Heading } from ".";
import { describeProps } from "../interface";
import { Frame } from "./Frame";

export const Describe = ({ image, title, text }: describeProps) => {
  return (
    <Frame>
      <img src={image} alt="" className="h-[400px]" />
      <div>
        <Heading title={title} text={text} />
        <div className="mt-8">
          <Button title="Learn More" classes="bg-green text-colorWhite" />
        </div>
      </div>
    </Frame>
  );
};
