import React from "react";
import Headding from "../../components/Heading/Heading";
import Pragrap from "../../components/Pragrap/Pragrap";
import img from "../../assets/img/property-1.jpg";
import img2 from "../../assets/img/property-2.jpg";
import img3 from "../../assets/img/property-4.jpg";
import img4 from "../../assets/img/property-5.jpg";
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
    <div className="max-5 md:max-w-7xl md:mx-auto py-10">
      <Headding props={"About"} />
      <div className="flex gap-10 py-7">
        <div className=" w-[60%] ">
          {pragrapContent.map((data) => {
            return <Pragrap key={data.id} props={data.title} />;
          })}
        </div>
        <div className="grid grid-cols-2 gap-6 w-[40%]">
          {imageProperty.map((image) => {
            return (
              <div className="w-full h-44" key={image.id}>
                <img className="w-full h-full" src={image.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
