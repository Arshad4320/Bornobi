import React from "react";
import Headding from "../../components/Heading/Heading";

import img from "../../assets/img/property-1.jpg";
import img2 from "../../assets/img/electrician.avif";
import img3 from "../../assets/img/Handy.jpg";
import img4 from "../../assets/img/management.jpg";
import Pragraph from "./../../components/Pragraph/Pragraph";

const pragrapContent = [
  {
    id: 1,
    title:
      "Bornobi Properties is an independent Development Agent, that specialises in Development, lettings and Management. Our local knowledge and connection make us experts within our industry.",
  },
  {
    id: 2,
    title:
      "We have a vast knowledge and experience within the urban property industry plus the local locations that we deal with. We are happy to answer any questions that you might have, if you are thinking of development, renovation, letting, renting or management services.",
  },
  {
    id: 3,
    title:
      "Our teams are ready to carry out many viewings and valuations on a daily basis to support your demand within the office hour or 24 hours on online massages. These services will make sure you are never miss an opportunity to rent or let your property.",
  },
  {
    id: 4,
    title:
      "We are totally digitalized for our marketing and advertised to reach and engaged the clients. We are on all the major following platforms and medias to show our property and services:",
  },
  {
    id: 5,
    title:
      "Rightmove, Zoopla, Prime Location, property live, Google, MSN, our website and social media.",
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
