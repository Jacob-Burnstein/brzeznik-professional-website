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
        <h4>Services Offered</h4>
        <ul>
          {services.map((service, index) => (
            <div className="serviceAndCheck" key={index}>
              <li className="service">{service}</li>
              <i class="fa-solid fa-check checkmark"></i>
            </div>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ServicesOffered;
