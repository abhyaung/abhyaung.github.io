import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [activeFilter, setActiveFilter] = useState("All");

  const filterItem = (categoryItem) => {
    if (categoryItem === "All") {
      setItems(Menu);
      setActiveFilter("All");
      return;
    }
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
    setActiveFilter(categoryItem);
  };

  const categories = [
    "All",
    "AI & ML",
    "Full-Stack",
    "Backend",
    "Front-End",
    "Android",
  ];

  return (
    <section className="work container section" id="work">
      <h2 className="section_title">My Projects</h2>

      <div className="work_filters">
        {categories.map((category, index) => (
          <span
            key={index}
            className={`work_item ${activeFilter === category ? "active-work" : ""}`}
            onClick={() => filterItem(category)}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="work_container">
        {items.map((elem) => {
          const { id, image, title, category, link, description } = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt={title} className="work_img" />
                <span className="work_category">{category}</span>
              </div>

              <div className="information">
                <h3 className="work_title">{title}</h3>
                <p className="work_description">{description}</p>
              </div>

              {/* FIXED TYPO: changed targrt to target */}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="work_button"
              >
                <i className="icon-link work_button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
