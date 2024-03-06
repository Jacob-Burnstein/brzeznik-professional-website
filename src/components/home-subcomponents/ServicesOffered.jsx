import React from "react";
import outside from "../../images/outside.jpeg";
import child from "../../images/child.jpeg";

const ServicesOffered = () => {
  const services = [
    {
      name: "Initial Assessment",
      description:
        "An initial music therapy assessment serves to help me get to know a new client and to tailor my music therapy services to meet their unique needs. Through this evaluation process, I assess whether music therapy is a suitable fit for you, identify specific goals to work toward, and determine the most effective approaches and techniques to achieve those goals. Initial assessment is available in person or via telehealth.",
    },
    {
      name: "Individual Music Therapy",
      description:
        "Individual music therapy sessions are typically 45 minutes to an hour long. For young children, 30-minute sessions may be considered. Whether it's improving communication, managing stress, or enhancing motor skills, we'll use music as our tool to make progress feel more like play. With music as our backdrop, we'll seamlessly integrate therapeutic activities into enjoyable musical experiences, masking the 'work' with the fun of music. Individual sessions are available in person or via telehealth.",
    },
    {
      name: "Group Music Therapy",
      description:
        "Group music therapy sessions offer a dynamic and inclusive experience, perfect for a variety of settings such as schools, camps, hospitals, group homes, day programs, nursing homes, and assisted living communities. These sessions cater to diverse demographics, including children, individuals with disabilities, older adults, and hospital patients, fostering a sense of community and connection through the power of music while building and practicing important skills, such as social skills, emotional regulation, self-esteem, stress-reduction, and universality.",
    },
    {
      name: "Music Therapy In-service",
      description:
        "I offer comprehensive music therapy in-services tailored to your organization's needs. Structured and informative sessions cover a variety of topics, including the benefits of music therapy, practical applications in different settings, and hands-on techniques for integrating music into your program. Whether you're a school, healthcare facility, or community organization, a music therapy in-service provides valuable insights and strategies to enhance the well-being of your clients or students through the power of music therapy.",
    },
  ];

  return (
    <>
      <h2 className="servicesTitle">Services Offered</h2>
      <section className="servicesAndImgContainer">
        <div className="imgContainer">
          <img className="servicesImg" src={outside} />
          <img className="servicesImg" src={child} />
        </div>
        <section className="servicesList">
          <ul>
            {services.map((service, index) => (
              <div className="serviceAndDescription" key={index}>
                <h4>{service.name}</h4>
                <p className="serviceDescription">{service.description}</p>
              </div>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
};

export default ServicesOffered;
