import { Heading, ListBrand } from ".";

export const Brands = () => {
  return (
    <div className="text-center pt-[70px]">
      <Heading
        title="Our Clients"
        text="We have been working with some Fortune 500+ clients"
      />
      <ListBrand classes="mx-24 mt-6 w-[70px]" />
    </div>
  );
};
