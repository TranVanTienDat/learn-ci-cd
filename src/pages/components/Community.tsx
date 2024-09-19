import icon1 from "../../assets/images/Icon (1).svg";
import icon2 from "../../assets/images/Icon (2).svg";
import icon from "../../assets/images/Icon.svg";
import { Heading } from "../../components";

export const Community = () => {
  return (
    <div className="text-center py-16">
      <div className="flex mx-24  mb-6 gap-8">
        <div className=" flex flex-col items-center p-6 shadow-md rounded-lg">
          <img src={icon} alt="" className="w-[100px]" />
          <h4 className="text-3xl font-semibold text-textColor mt-3 mb-2">
            Membership
            <br />
            Organisations
          </h4>
          <p className="text-lg text-textColor2">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className=" flex flex-col items-center p-6 shadow-md rounded-lg">
          <img src={icon1} alt="" className="w-[100px]" />
          <h4 className="text-3xl font-semibold text-textColor mt-3 mb-2">
            National
            <br />
            Associations
          </h4>
          <p className="text-lg text-textColor2">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className=" flex flex-col items-center p-6 shadow-md rounded-lg">
          <img src={icon2} alt="" className="w-[100px]" />
          <h4 className="text-3xl font-semibold text-textColor mt-3 mb-2">
            Clubs
            <br />
            And Groups
          </h4>
          <p className="text-lg text-textColor2">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
      <Heading
        title="Manage your entire community in a single system"
        text="Who is Nextcent suitable for?
"
      />
    </div>
  );
};
