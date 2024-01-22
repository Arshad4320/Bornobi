import React from "react";

import img from "../../assets/img/development.png";
import img2 from "../../assets/img/lettings.png";
import img3 from "../../assets/img/management.png";
import Headding from "../../components/Heading/Heading";
const Service = () => {
  return (
    <div className="mx-4 md:max-w-4xl  lg:max-w-7xl md:mx-auto  mt-10 lg:mt-24 pb-10 ">
      <Headding className={"text-center mb-10"} props={"Service"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-blue-600 hover:bg-blue-600 duration-500 hover:text-white p-6">
          <div className="h-24 w-24 mx-auto mb-4">
            <img className="w-full h-full " src={img} alt="" />
          </div>
          <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
            Development
          </h3>
          <p className="text-justify font-normal md:font-medium ">
            We love to develop the property with restoring character and take it
            real pride in transforming them sympathetically. For that goal there
            is nothing more satisfying than completing that final snagging list
            and shaking the customers hand leaving them happy, we will happily
            work to schedules and budgets, we can supply bathrooms suites,
            kitchens, tiles, boilers, floor coverings or just give you a simple
            labour cost to carry out the work
          </p>
        </div>
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-pink-600 hover:bg-pink-600 duration-500 hover:text-white p-6">
          <div className="h-24 w-24 mx-auto mb-4">
            <img className="w-full h-full" src={img2} alt="" />
          </div>
          <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
            Lettings
          </h3>
          <p className="text-justify font-normal md:font-medium ">
            Providing a wide range of services for both tenant and landlords we
            have a good relationship with all of our clients and we stick to be
            professional, friendly and flexible at all times. We also maintain
            organising tenant servicing, references, inventories and
            maintenance.
          </p>
        </div>
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-purple-600 hover:bg-purple-600 duration-500 hover:text-white p-6">
          <div className="h-24 w-24 mx-auto mb-4">
            <img className="w-full h-full" src={img3} alt="" />
          </div>
          <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
            Management
          </h3>
          <p className="text-justify font-normal md:font-medium ">
            There is an endless list of things that can go wrong during the
            property management. We can organise and run it for you within our
            contacts at your disposal. Project management is one of the most
            vital roles in the property, especially if you are investing, we can
            handle it from starting to finish as your demand to make sure
            maximum outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
