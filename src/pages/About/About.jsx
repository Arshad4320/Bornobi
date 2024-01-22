import React from "react";
import Headding from "../../components/Heading/Heading";

import img from "../../assets/img/property-1.jpg";
import img2 from "../../assets/img/property-2.jpg";
import img3 from "../../assets/img/property-4.jpg";
import img4 from "../../assets/img/property-5.jpg";
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

const imageProperty = [
  {
    id: 1,
    image: img,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
  {
    id: 4,
    image: img4,
  },
];

const About = () => {
  return (
    <div className="mx-4 md:max-w-4xl lg:max-w-7xl md:mx-auto pb-10 mt-16 lg:mt-24  ">
      <Headding className={"text-center"} props={"About"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:py-7">
        <div className=" ">
          {pragrapContent.map((data) => {
            return <Pragraph key={data.id} props={data.title} />;
          })}
          <div className="flex md:gap-4 flex-col md:flex-row md:mt-3">
            <button className="text-white bg-primary hover:bg-blue-400 duration-500 flex w-full py-3  lg:py-4 my-4 font-semibold rounded-md shadow-md items-center justify-center">
              Submit
            </button>{" "}
            <button className="text-white bg-primary hover:bg-blue-400 duration-500 flex w-full py-3  lg:py-4 md:my-4 font-semibold rounded-md shadow-md items-center justify-center">
              Submit
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 ">
          {imageProperty.map((image) => {
            return (
              <div key={image.id}>
                <div className="relative group">
                  <div className="w-full h-44 md:h-64">
                    <img
                      className="w-full h-full rounded-md"
                      src={image.image}
                      alt=""
                    />
                  </div>
                  <div className="absolute inset-0 flex  items-end opacity-0 group-hover:opacity-65 group-hover:bg-black rounded-md transition duration-700 ease-in-out" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
