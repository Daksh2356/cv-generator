import React from "react";

const About = () => {
  const storedData = JSON.parse(localStorage.getItem("cvData"));
  const about =
    storedData?.aboutme ||
    " I have experience in both front-end and back-end development, and I am always eager to learn new technologies and tools. ";

  return (
    <div className="mt-2 p-3">
      <h1 className="text-3xl font-bold underline ">About me</h1>
      <p className="text-md tracking-widest">{about}</p>
    </div>
  );
};

export default About;
