import React, { useState, useEffect } from "react";

const AdminPage = () => {
  const [formData, setFormData] = useState({
    profilePicture: "",
    fullname: "",
    designation: "",
    contact: {
      email: "",
      phone: "",
      address: "",
    },
    aboutme: "",
    education: {
      degree1: "",
      institute1: "",
      duration1: "",
      summary1: "",
      degree2: "",
      institute2: "",
      duration2: "",
      summary2: "",
    },
    experience: {
      companyName1: "",
      position1: "",
      duration1: "",
      description1: "",
      companyName2: "",
      position2: "",
      duration2: "",
      description2: "",
      companyName3: "",
      position3: "",
      duration3: "",
      description3: "",
    },
    skills:{
      skill1: "",
      skill2: "",
      skill3: "",
      skill4: "",
      skill5: "",
    },
    languages: {
      language1: "",
      language2: "",
      language3: "",
      proficiency1: "",
      proficiency2: "",
      proficiency3: "",
    },
  });

  useEffect(() => {
    // Fetch data from local storage on component mount
    const storedData = localStorage.getItem("cvData");
    if (storedData) {
      setFormData(storedData); // Set Welcome data
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "profilePicture") {
      //  Handle images
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: reader.result,
        }));
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    } 
    else if (name.startsWith("contact.")) {
      // Handle nested contact properties
      const contactField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        contact: {
          ...prevData.contact,
          [contactField]: value,
        },
      }));
    }
    else if (name.startsWith("education.")) {
      // Handle nested education properties
      const educationField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        education: {
          ...prevData.education,
          [educationField]: value,
        },
      }));
    } 
    else if(name.startsWith("experience.")){
      // Handle nested experience properties
      const experienceField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        experience: {
          ...prevData.experience,
          [experienceField]: value,
        },
      }));
    }
    else if(name.startsWith("skills.")){
      // Handle nested skills properties
      const skillsField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        skills: {
          ...prevData.skills,
          [skillsField]: value,
        },
      }));
    }
    else if(name.startsWith("languages.")){
      // Handle nested languages properties
      const languagesField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        languages: {
          ...prevData.languages,
          [languagesField]: value,
        },
      }));
    }
    else {
      // Handle other form fields
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = { ...formData };
    for (const key in updatedFormData) {
      if (updatedFormData[key] === null || updatedFormData[key] === undefined) {
        updatedFormData[key] = ""; // Update to empty string
      }
    }
    // Update data in local storage
    localStorage.setItem("cvData", JSON.stringify(formData));
    console.log(formData);
    alert("Data updated successfully!");
  };

  return (
    <div>
      <h5 className="text-3xl tracking-tight mb-3">CV DATA</h5>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="text-2xl tracking-tight mb-6">
          <label>Picture : </label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleChange}
            placeholder="Choose your picture"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Full Name  : </label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Enter full name here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
       <h5 className="text-3xl tracking-tight inline bg-gray-200 m-2 p-2">Contact</h5>
       <br />
       <br />
        <div className="text-2xl tracking-tight mb-6">
          <label>Email : </label>
          <input
            type="email"
            name="contact.email"
            value={formData.contact ? formData.contact.email : ""}
            onChange={handleChange}
            placeholder="Enter email here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div> 
        <div className="text-2xl tracking-tight mb-6">
          <label>Phone  :   </label>
          <input
            type="text"
            name="contact.phone"
            value={formData.contact ? formData.contact.phone : ""}
            onChange={handleChange}
            placeholder="Enter phone number here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
        <label>Address  :  </label>
        <textarea
            name="contact.address"
            value={formData.contact ? formData.contact.address : ""}
            onChange={handleChange}
            placeholder="Enter address here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />  
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>About Me  :  </label>
          <textarea
            name="aboutme"
            value={formData.aboutme}
            onChange={handleChange}
            placeholder="Enter about me here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Designation  :  </label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Enter designation here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <h5 className="text-3xl tracking-tight inline bg-gray-200 m-2 p-2">Experience</h5>
       <br />
       <br />
        <div className="text-2xl tracking-tight mb-6">
          <label> Position 1 : </label>
          <input
            type="text"
            name="experience.position1"
            value={formData.experience ? formData.experience.position1 : ""}
            onChange={handleChange}
            placeholder="Enter position here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div> 
        <div className="text-2xl tracking-tight mb-6">
          <label>Company Name 1 :  </label>
          <input
            type="text"
            name="experience.companyName1"
            value={formData.experience ? formData.experience.companyName1 : ""}
            onChange={handleChange}
            placeholder="Enter company name here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
        <label>Description 1  :  </label>
        <textarea
            name="experience.description1"
            value={formData.experience ? formData.experience.description1 : ""}
            onChange={handleChange}
            placeholder="Enter description here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />  
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Duration 1 :  </label>
          <input
            type="text"
            name="experience.duration1"
            value={formData.experience ? formData.experience.duration1 : ""}
            onChange={handleChange}
            placeholder="Enter duration here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label> Position 2 : </label>
          <input
            type="text"
            name="experience.position2"
            value={formData.experience ? formData.experience.position2 : ""}
            onChange={handleChange}
            placeholder="Enter position here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Company Name 2 :  </label>
          <input
            type="text"
            name="experience.companyName2"
            value={formData.experience ? formData.experience.companyName2 : ""}
            onChange={handleChange}
            placeholder="Enter company here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
        <label>Description 2  :  </label>
        <textarea
            name="experience.description2"
            value={formData.experience ? formData.experience.description2 : ""}
            onChange={handleChange}
            placeholder="Enter description here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Duration 2 :  </label>
          <input
            type="text"
            name="experience.duration2"
            value={formData.experience  ? formData.experience.duration2 : ""}
            onChange={handleChange}
            placeholder="Enter duration here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label> Position 3 : </label>
          <input
            type="text"
            name="experience.position3"
            value={formData.experience ? formData.experience.position3 : ""}
            onChange={handleChange}
            placeholder="Enter position here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Company Name 3 :  </label>
          <input
            type="text"
            name="experience.companyName3"
            value={formData.experience ? formData.experience.companyName3 : ""}
            onChange={handleChange}
            placeholder="Enter company here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
        <label>Description 3  :  </label>
        <textarea
            name="experience.description3"
            value={formData.experience ? formData.experience.description3 : ""}
            onChange={handleChange}
            placeholder="Enter description here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Duration 3 :  </label>
          <input
            type="text"
            name="experience.duration3"
            value={formData.experience  ? formData.experience.duration3 : ""}
            onChange={handleChange}
            placeholder="Enter duration here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <h5 className="text-3xl tracking-tight inline bg-gray-200 m-2 p-2">Education</h5>
        <br />
        <br />
        <div className="text-2xl tracking-tight mb-6">
          <label>Degree 1 : </label>
          <input
            type="text"
            name="education.degree1"
            value={formData.education ? formData.education.degree1 : ""}
            onChange={handleChange}
            placeholder="Enter degree here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Institute 1 :  </label>
          <input
            type="text"
            name="education.institute1"
            value={formData.education ? formData.education.institute1 : ""}
            onChange={handleChange}
            placeholder="Enter institute here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Duration 1 :  </label>
          <input
            type="text"
            name="education.duration1"
            value={formData.education ? formData.education.duration1 : ""}
            onChange={handleChange}
            placeholder="Enter duration here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
        <label>Summary 1  :  </label>
        <textarea
            name="education.summary1"
            value={formData.education ? formData.education.summary1 : ""}
            onChange={handleChange}
            placeholder="Enter summary here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Degree 2 : </label>
          <input
            type="text"
            name="education.degree2"
            value={formData.education ? formData.education.degree2 : ""}
            onChange={handleChange}
            placeholder="Enter degree here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Institute 2 :  </label>
          <input
            type="text"
            name="education.institute2"
            value={formData.education ? formData.education.institute2 : ""}
            onChange={handleChange}
            placeholder="Enter institute here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Duration 2 :  </label>
          <input
            type="text"
            name="education.duration2"
            value={formData.education ? formData.education.duration2 : ""}
            onChange={handleChange}
            placeholder="Enter duration here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
        <label>Summary 2  :  </label>
        <textarea
            name="education.summary2"
            value={formData.education ? formData.education.summary2 : ""}
            onChange={handleChange}
            placeholder="Enter summary here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
        </div>
        <h5 className="text-3xl tracking-tight inline bg-gray-200 m-2 p-2">Skills</h5>
        <br />
        <br />
        <div className="text-2xl tracking-tight mb-6">
          <label>Skill 1 : </label>
          <input
            type="text"
            name="skills.skill1"
            value={formData.skills ? formData.skills.skill1 : ""}
            onChange={handleChange}
            placeholder="Enter skill here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Skill 2 :  </label>
          <input
            type="text"
            name="skills.skill2"
            value={formData.skills ? formData.skills.skill2 : ""}
            onChange={handleChange}
            placeholder="Enter skill here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Skill 3 :  </label>
          <input
            type="text"
            name="skills.skill3"
            value={formData.skills ? formData.skills.skill3 : ""}
            onChange={handleChange}
            placeholder="Enter skill here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Skill 4 :  </label>
          <input
            type="text"
            name="skills.skill4"
            value={formData.skills ? formData.skills.skill4 : ""}
            onChange={handleChange}
            placeholder="Enter skill here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Skill 5 :  </label>
          <input
            type="text"
            name="skills.skill5"
            value={formData.skills ? formData.skills.skill5 : ""}
            onChange={handleChange}
            placeholder="Enter skill here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <h5 className="text-3xl tracking-tight inline bg-gray-200 m-2 p-2">Languages</h5>
        <br />
        <br />
        <div className="text-2xl tracking-tight mb-6">
          <label>Language 1 : </label>
          <input
            type="text"
            name="languages.language1"
            value={formData.languages ? formData.languages.language1 : ""}
            onChange={handleChange}
            placeholder="Enter language here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Language 2 :  </label>
          <input
            type="text"
            name="languages.language2"
            value={formData.languages ? formData.languages.language2 : ""}
            onChange={handleChange}
            placeholder="Enter language here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Language 3 :  </label>
          <input
            type="text"
            name="languages.language3"
            value={formData.languages ? formData.languages.language3 : ""}
            onChange={handleChange}
            placeholder="Enter language here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Proficiency 1 :  </label>
          <input
            type="text"
            name="languages.proficiency1"
            value={formData.languages ? formData.languages.proficiency1 : ""}
            onChange={handleChange}
            placeholder="Enter proficiency here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Proficiency 2 :  </label>
          <input
            type="text"
            name="languages.proficiency2"
            value={formData.languages ? formData.languages.proficiency2 : ""}
            onChange={handleChange}
            placeholder="Enter proficiency here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Proficiency 3 :  </label>
          <input
            type="text"
            name="languages.proficiency3"
            value={formData.languages ? formData.languages.proficiency3 : ""}
            onChange={handleChange}
            placeholder="Enter proficiency here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <br />
        <br />
        <div className="flex flex-wrap gap-6">
          <button
            className="p-2 bg-white text-black rounded-lg border-4 focus:outline-none hover:bg-cyan-500"
            type="submit"
          >
            Update Data
          </button>
          <button
            onClick={() => setFormData({})}
            className="p-2 bg-white text-black rounded-lg border-4 focus:outline-none hover:bg-cyan-500"
            type="reset"
          >
            Reset Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPage;
