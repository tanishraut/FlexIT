import React from "react";
import { servicesData } from "../../data/servicesData";

export default function ServicesSection() {
  return (
    <section className="services section" id="services">
      <div className="section-heading">
        <span className="section-label">WHAT WE DO</span>

        <h2>
          Everything your business
          <span> needs to grow.</span>
        </h2>

        <p>
          From building your digital foundation to bringing customers through
          the door, Flexus provides technology and growth solutions under one
          roof.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <article className="service-card" key={service.number}>
            <div className={`service-card-icon ${service.iconType}`}>
              {service.icon}
            </div>

            <span className="service-number">{service.number}</span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href={service.link}>Learn More →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
