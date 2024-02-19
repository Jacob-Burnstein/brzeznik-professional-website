import React from "react";

const ServicesOffered = () => {
  const services = [
    { name: "Initial Assessment", icon: "fa-solid fa-clipboard-list fa-5x" },
    {
      name: "Individual Treatment",
      icon: "fa-solid fa-person-half-dress fa-5x",
    },
    { name: "Group Treatment", icon: "fa-solid fa-people-group fa-5x" },
    { name: "Cough on ppl", icon: "fa-solid fa-head-side-cough fa-5x" },
    { name: "Guns welcome", icon: "fa-solid fa-person-rifle fa-5x" },
  ];
  return (
    <>
      <section className="servicesList">
        <h2>Services Offered</h2>
        <ul>
          {services.map((service, index) => (
            <div className="serviceAndIcon" key={index}>
              <i className={service.icon}></i>
              <li className="service">{service.name}</li>
            </div>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ServicesOffered;
