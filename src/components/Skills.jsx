import React from "react";

const Skills = () => {
  const storedData = JSON.parse(localStorage.getItem("cvData"));
  const skill = storedData?.skills || {
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
  };

  return (
    <div className="mt-2 p-3">
      <h1 className="text-3xl ">Skills</h1>
      <p className="text-sm"> {skill.skill1}</p>
      <p className="text-sm">{skill.skill2}</p>
      <p className="text-sm"> {skill.skill3}</p>
      <p className="text-sm"> {skill.skill4}</p>
      <p className="text-sm"> {skill.skill5}</p>
    </div>
  );
};

export default Skills;
