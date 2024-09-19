import brand2 from "../assets/images/Vector-2.svg";
import brand3 from "../assets/images/Vector-3.svg";
import brand4 from "../assets/images/Vector-4.svg";
import brand6 from "../assets/images/Vector-6.svg";
import brand from "../assets/images/Vector.svg";
import { classes } from "../interface";
export const ListBrand = ({ classes }: classes) => {
  const ListBrand: string[] = [brand, brand2, brand3, brand4, brand6];
  const classImg = `${classes}`;
  return (
    <div className="flex flex-1 justify-evenly items-center ">
      {ListBrand.map((item, i) => {
        return <img key={i} src={item} alt="" className={classImg} />;
      })}
    </div>
  );
};
