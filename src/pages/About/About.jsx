import React from "react";
import Headding from "../../components/Heading/Heading";

import Pragraph from "./../../components/Pragraph/Pragraph";

const pragrapContent = [
  {
    id: 1,
    title:
      "Bornobi Properties is an independent Property services company that specialises in Renovation, Short lettings, Service Accommodation Management and Maintain with nationwide builders recutting to provide the best services in local area within our experience and expertise. ",
  },
  {
    id: 2,
    title:
      "We have a vast knowledge and experience within the urban property industry plus the local locations that we deal with. We are happy to answer any questions that you might have, if you are thinking of development, renovation, Short-letting, Maintain, Management, SA and OTA services. ",
  },
  {
    id: 3,
    title:
      "Our Rapid Teams are ready to carry out many viewings and valuations on a daily basis to support your demand within the service our 8 AM to 10 PM   hour and 24 Hours Call Back support. ",
  },
  {
    id: 4,
    title:
      "These services will make sure you are never missing an opportunity to get our Rapid Repair services to Manage & Maintain your property 24/7. ",
  },
  {
    id: 5,
    title:
      "We are totally digitalized for our marketing and advertised to reach and engaged the clients. We are on all the major following platforms and medias to show our services including- Google, social media, Prime Location, Yellow page and our website.",
  },
];

const About = () => {
  return (
    <div className="mx-4 md:max-w-4xl lg:max-w-7xl md:mx-auto pb-10 mt-16 lg:mt-24  ">
      <Headding className={"text-center"} props={"About"} />
      <div className="grid grid-cols-1  gap-10 md:py-7">
        <div className=" ">
          {pragrapContent.map((data) => {
            return <Pragraph key={data.id} props={data.title} />;
          })}
          <div className="flex md:gap-4 flex-col md:flex-row md:mt-3">
            <a className="w-full" href="http://rentandrooms.com/">
              <button className="text-white bg-primary hover:bg-blue-400 duration-500 flex w-full py-3  lg:py-4 my-4 font-semibold rounded-md shadow-md items-center justify-center">
                Rent A Room
              </button>
            </a>{" "}
            <a className="w-full" href="http://www.rapidhandyworks.com/">
              <button className="text-white bg-primary hover:bg-blue-400 duration-500 flex w-full py-3  lg:py-4 md:my-4 font-semibold rounded-md shadow-md items-center justify-center">
                Book A Handyman
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
