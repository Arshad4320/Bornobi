import React from "react";
import { FaCheck } from "react-icons/fa6";
import { TbDeviceDesktopCheck } from "react-icons/tb";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { GiGardeningShears } from "react-icons/gi";
import Headding from "../../components/Heading/Heading";
import { MdHandyman } from "react-icons/md";
import { handyman } from "../../components/ServiceItem/handymanItem";
import { MdElectricalServices } from "react-icons/md";
import { FaPaintRoller } from "react-icons/fa";
import { MdPlumbing } from "react-icons/md";
import { electritianItem } from "../../components/ServiceItem/electitianItem";
import { carpenter } from "../../components/ServiceItem/carpenter";
import { MdCarpenter } from "react-icons/md";
import { gardning } from "../../components/ServiceItem/gardening";
const Service = () => {
  return (
    <div className="mx-4 md:max-w-4xl  lg:max-w-7xl md:mx-auto   mt-24 pb-10 ">
      <Headding className={"text-center mb-10"} props={"Service"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-blue-600 hover:bg-blue-600 duration-500 hover:text-white p-6">
          <div className="flex justify-center mb-4">
            <TbDeviceDesktopCheck className="text-7xl" />
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
          <div className="flex justify-center mb-4">
            <FaAssistiveListeningSystems className="text-7xl" />
          </div>
          <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
            Listening
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
          <div className="flex justify-center mb-4">
            <MdManageAccounts className="text-7xl" />
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

        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-red-600 hover:bg-red-600 duration-500 hover:text-white p-6">
          <div className=" flex justify-center mb-4">
            <MdHandyman className="text-7xl " />
          </div>
          <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
            Handyman
          </h3>
          <p className="text-justify font-normal md:font-medium ">
            All our handymen are highly experienced, skilled, and trained in all
            aspects of in-home maintenance and repairs.
          </p>
          <div>
            <p>
              {" "}
              <div>
                {handyman.map((data) => {
                  return (
                    <div key={data.id} className="flex items-center gap-2 mt-2">
                      {" "}
                      <FaCheck className=" " /> <span>{data.title}</span>
                    </div>
                  );
                })}
              </div>
            </p>
          </div>
        </div>

        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-orange-600 hover:bg-orange-600 duration-500 hover:text-white p-6">
          <div className=" flex justify-center mb-4">
            <MdElectricalServices className="text-7xl " />
          </div>
          <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
            Electrician
          </h3>
          <p className="text-justify font-normal md:font-medium ">
            Our team of specialist electricians have all passed our rigorous
            background and qualifications checks so you can be certain of the
            safety and expertise of any electric work we undertake.
          </p>
          <div>
            <p>
              {" "}
              <div>
                {electritianItem.map((data) => {
                  return (
                    <div key={data.id} className="flex items-center gap-2 mt-2">
                      {" "}
                      <FaCheck className=" " /> <span>{data.title}</span>
                    </div>
                  );
                })}
              </div>
            </p>
          </div>
        </div>

        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-green-600 hover:bg-green-600 duration-500 hover:text-white p-6">
          <div className=" flex justify-center mb-4">
            <MdPlumbing className="text-7xl " />
          </div>
          <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
            Plumbers
          </h3>
          <p className="text-justify font-normal md:font-medium ">
            Our plumbers are some of the best in London. We have all the latest
            equipment and training to ensure that whether you need a sink
            unblocked, or a new shower system installed, the job will be done
            with safety, quality, and longevity in mind.
          </p>
          <div>
            <p>
              {" "}
              <div>
                {electritianItem.map((data) => {
                  return (
                    <div key={data.id} className="flex items-center gap-2 mt-2">
                      {" "}
                      <FaCheck className=" " /> <span>{data.title}</span>
                    </div>
                  );
                })}
              </div>
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-fuchsia-600 hover:bg-fuchsia-600 duration-500 hover:text-white p-6">
          <div className=" flex justify-center mb-4">
            <MdCarpenter className="text-7xl " />
          </div>
          <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
            Carpenters
          </h3>
          <p className="text-justify font-normal md:font-medium ">
            We have a carpenter for any of your household needs – ranging from
            fully fitted kitchens, built in wardrobes, bespoke shelving or door
            installations.
          </p>
          <div>
            <p>
              {" "}
              <div>
                {carpenter.map((data) => {
                  return (
                    <div key={data.id} className="flex items-center gap-2 mt-2">
                      {" "}
                      <FaCheck className=" " /> <span>{data.title}</span>
                    </div>
                  );
                })}
              </div>
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-pink-600 hover:bg-pink-600 duration-500 hover:text-white p-6">
          <div className=" flex justify-center mb-4">
            <GiGardeningShears className="text-7xl " />
          </div>
          <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
            Gardening
          </h3>
          <p className="text-justify font-normal md:font-medium ">
            Our garden design team can provide a Springtime spruce-up, new
            landscape design, or general garden maintenance to give you a garden
            to be proud of. We will provide all the tools and experience to
            bring your garden into full bloom.
          </p>
          <div>
            <p>
              {" "}
              <div>
                {gardning.map((data) => {
                  return (
                    <div key={data.id} className="flex items-center gap-2 mt-2">
                      {" "}
                      <FaCheck className=" " /> <span>{data.title}</span>
                    </div>
                  );
                })}
              </div>
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-indigo-900 hover:bg-indigo-900 duration-500 hover:text-white p-6">
          <div className=" flex justify-center mb-4">
            <FaPaintRoller className="text-7xl " />
          </div>
          <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
            Painting & Decorating
          </h3>
          <p className="text-justify font-normal md:font-medium ">
            Our experienced team of painters and decorators are available for
            all interior and exterior painting projects, from a single room to a
            whole home inside and out. Each painting project is estimated
            individually following a site visit or provision of
            photographs/videos to ensure the correct materials and finishes are
            quoted.
          </p>
          <div className="mt-5">
            <p>
              Working with a variety of top quality paint suppliers and wall
              paper providers throughout Europe our painters can complete a
              project to your specifications. Alternatively working in
              collaboration with one of our interior design specialist we can
              provide a complete design proposal for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
