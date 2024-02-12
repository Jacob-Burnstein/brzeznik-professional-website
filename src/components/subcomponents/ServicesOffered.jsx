import React from "react";

const ServicesOffered = () => {
  const services = [
    "Initial Assessment",
    "Individual Tx",
    "Group Tx",
    "etc",
    "etc",
  ];

  return (
    <>
      <section className="servicesList">
        <h2>Services Offered</h2>
        <ul>
          {services.map((service, index) => (
            <div className="serviceAndCheck" key={index}>
              <i class="fa-solid fa-check fa-2x checkmark"></i>
              <li className="service">{service}</li>
            </div>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ServicesOffered;
