import React from "react";

const Skills = () => {
  const storedData = JSON.parse(localStorage.getItem("cvData"));
  const skill = storedData?.skills || {
    skill1: "Programming",
    skill2: "Desgining",
    skill3: "Typist",
    skill4: "Leadership",
    skill5: "Teamwork",
  };

  return (
    <div className="mt-2 p-3 text-start">
      <h1 className="text-4xl font-roboto tracking-tight hover:underline">Skills</h1>
      <p className="text-xl font-roboto tracking-widest"> {skill.skill1}</p>
      <p className="text-xl font-roboto tracking-widest">{skill.skill2}</p>
      <p className="text-xl font-roboto tracking-widest"> {skill.skill3}</p>
      <p className="text-xl font-roboto tracking-widest"> {skill.skill4}</p>
      <p className="text-xl font-roboto tracking-widest"> {skill.skill5}</p>
    </div>
  );
};

export default Skills;
