import React from "react";

const ServicesOffered = () => {
  const services = [
    { name: "Initial Assessment", icon: "fa-solid fa-clipboard-list" },
    { name: "Individual Tx", icon: "fa-solid fa-person-half-dress" },
    { name: "Group Tx", icon: "fa-solid fa-people-group" },
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
