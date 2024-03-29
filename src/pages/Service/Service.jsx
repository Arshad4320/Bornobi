import React from "react";
import { FaCheck } from "react-icons/fa6";

import Headding from "../../components/Heading/Heading";

import { handyman } from "../../components/ServiceItem/handymanItem";

import { electritianItem } from "../../components/ServiceItem/electitianItem";
import { carpenter } from "../../components/ServiceItem/carpenter";

import { gardning } from "../../components/ServiceItem/gardening";
import { painting } from "../../components/ServiceItem/painting";

import img from "../../assets/img/img.jpg";
import img2 from "../../assets/img/img2.avif";
import img3 from "../../assets/img/img3.avif";
import img4 from "../../assets/img/img4.avif";
import img5 from "../../assets/img/img5.avif";
import img6 from "../../assets/img/img6.avif";
import img7 from "../../assets/img/img7.avif";
import img8 from "../../assets/img/img8.avif";
import img9 from "../../assets/img/img9.avif";

const Service = () => {
  return (
    <div className="mx-4 md:max-w-4xl  lg:max-w-7xl md:mx-auto   mt-24 pb-10 ">
      <Headding className={"text-center mb-10"} props={"Service"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-b-blue-600 hover:bg-blue-600 duration-500 hover:text-white  ">
          <div className="flex justify-center mb-4 ">
            <img className="rounded-md rounded-b-none" src={img} alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
              Renovation
            </h3>
            <p className="text-justify font-normal text-lg ">
              We love to develop the property with restoring character and take
              it real pride in transforming them sympathetically. For that goal
              there is nothing more satisfying than completing that final
              snagging list and shaking the customers hand leaving them happy,
              we will happily work to schedules and budgets, we can supply
              bathrooms suites, kitchens, tiles, boilers, floor coverings or
              just give you a simple labour cost to carry out the work
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-b-pink-600 hover:bg-pink-600 duration-500 hover:text-white  ">
          <div className="">
            <img className="rounded-md rounded-b-none mb-4" src={img2} alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
              Short Letting
            </h3>
            <p className="text-justify font-normal text-lg ">
              Providing a wide range of services for both tenant and landlords
              we have a good relationship with all of our clients and we stick
              to be professional, friendly and flexible at all times. We also
              maintain organising tenant servicing, references, inventories and
              maintenance.
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-b-purple-600 hover:bg-purple-600 duration-500 hover:text-white  ">
          <div className="rounded-md rounded-b-none mb-4">
            <img src={img3} alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
              Management
            </h3>
            <p className="text-justify font-normal text-lg ">
              There is an endless list of things that can go wrong during the
              property management. We can organise and run it for you within our
              contacts at your disposal. Project management is one of the most
              vital roles in the property, especially if you are investing, we
              can handle it from starting to finish as your demand to make sure
              maximum outcomes.
            </p>
          </div>
        </div>

        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-b-red-600 hover:bg-red-600 duration-500 hover:text-white  ">
          <div className="  mb-4">
            <img className="rounded-md rounded-b-none" src={img4} alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
              Handy Works
            </h3>
            <p className="text-justify font-normal text-lg ">
              All our handymen are highly experienced, skilled, and trained in
              all aspects of in-uk maintenance and repairs.
            </p>
          </div>
          <div>
            <p>
              {" "}
              <div>
                {handyman.map((data) => {
                  return (
                    <div key={data.id} className="flex items-center gap-2 mt-2">
                      {" "}
                      <FaCheck className="font-semibold " />{" "}
                      <span className="font-semibold text-lg">
                        {data.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </p>
          </div>
        </div>

        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-b-orange-600 hover:bg-orange-600 duration-500 hover:text-white  ">
          <div className="  mb-4">
            <img className="rounded-md rounded-b-none" src={img5} alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
              Electrician
            </h3>
            <p className="text-justify font-normal text-lg ">
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
                      <div
                        key={data.id}
                        className="flex items-center gap-2 mt-2"
                      >
                        {" "}
                        <FaCheck className="font-semibold " />{" "}
                        <span className="font-semibold text-lg">
                          {data.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-b-green-600 hover:bg-green-600 duration-500 hover:text-white  ">
          <div className=" mb-4">
            <img className="rounded-md rounded-b-none" src={img6} alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
              Plumbers
            </h3>
            <p className="text-justify font-normal text-lg ">
              Our plumbers are some of the best in london local area. We have
              all the latest equipment and training to ensure that whether you
              need a sink unblocked, or a new shower system installed, the job
              will be done with safety, quality, and longevity in mind.
            </p>
            <div>
              <p>
                {" "}
                <div>
                  {electritianItem.map((data) => {
                    return (
                      <div
                        key={data.id}
                        className="flex items-center gap-2 mt-2"
                      >
                        {" "}
                        <FaCheck className="font-semibold " />{" "}
                        <span className="font-semibold text-lg">
                          {data.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-b-fuchsia-600 hover:bg-fuchsia-600 duration-500 hover:text-white  ">
          <div className="  mb-4">
            <img className="rounded-md rounded-b-none" src={img7} alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
              Carpenters
            </h3>
            <p className="text-justify font-normal text-lg ">
              We have a carpenter for any of your household needs – ranging from
              fully fitted kitchens, built in wardrobes, bespoke shelving or
              door installations.
            </p>
            <div>
              <p>
                {" "}
                <div>
                  {carpenter.map((data) => {
                    return (
                      <div
                        key={data.id}
                        className="flex items-center gap-2 mt-2"
                      >
                        {" "}
                        <FaCheck className="font-semibold " />{" "}
                        <span className="font-semibold text-lg">
                          {data.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-b-pink-600 hover:bg-pink-600 duration-500 hover:text-white  ">
          <div className="  mb-4">
            <img className="rounded-md rounded-b-none" src={img8} alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
              Gardening
            </h3>
            <p className="text-justify font-normal text-lg ">
              Our garden design team can provide a Springtime spruce-up, new
              landscape design, or general garden maintenance to give you a
              garden to be proud of.
            </p>
            <div>
              <p>
                {" "}
                <div>
                  {gardning.map((data) => {
                    return (
                      <div
                        key={data.id}
                        className="flex items-center gap-2 mt-2"
                      >
                        {" "}
                        <FaCheck className="font-semibold " />{" "}
                        <span className="font-semibold text-lg">
                          {data.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-b-indigo-900 hover:bg-indigo-900 duration-500 hover:text-white  ">
          <div className="  mb-4">
            <img className="rounded-md rounded-b-none" src={img9} alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
              Painting & Decorating
            </h3>
            <p className="text-justify font-normal text-lg ">
              Our experienced team of painters and decorators are available for
              all interior and exterior painting projects, from a single room to
              a whole home inside and out.
            </p>
            <div>
              <p>
                {" "}
                <div>
                  {painting.map((data) => {
                    return (
                      <div
                        key={data.id}
                        className="flex items-center gap-2 mt-2"
                      >
                        {" "}
                        <FaCheck className="font-semibold " />{" "}
                        <span className="font-semibold text-lg">
                          {data.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
