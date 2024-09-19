import { Achievements, Brands, Describe } from "../components";
import { Community, CommunityUpdate, Hero } from "./components";
import img1 from "../assets/images/Frame 35.svg";
import img2 from "../assets/images/pana.svg";
import { Customer } from "./components/Customer";
export const Home = () => {
  return (
    <div className="pt-[60px]">
      <Hero />
      <Brands />
      <Community />
      <Describe
        image={img1}
        title="The unseen of spending three years at Pixelgrade"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
      />
      <Achievements />
      <Describe
        image={img2}
        title="How to design your site footer like we did"
        text="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
      />
      <Customer />
      <CommunityUpdate />
    </div>
  );
};
