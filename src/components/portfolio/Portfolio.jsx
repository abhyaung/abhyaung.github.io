import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./projectsData";

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
    <section className="portfolio container section" id="portfolio">
      <h2 className="section_title">My Projects</h2>

      <div className="portfolio_filters">
        {categories.map((category, index) => (
          <span
            key={index}
            className={`portfolio_item ${activeFilter === category ? "portfolio_item--active" : ""}`}
            onClick={() => filterItem(category)}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="portfolio_container">
        {items.map((elem) => {
          const { id, image, title, category, link, description } = elem;
          return (
            <div className="portfolio_card" key={id}>
              <div className="portfolio_thumbnail">
                <img src={image} alt={title} className="portfolio_img" />
                <span className="portfolio_category">{category}</span>
              </div>

              <div className="portfolio_info">
                <h3 className="portfolio_title">{title}</h3>
                <p className="portfolio_description">{description}</p>
              </div>

              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio_button"
              >
                <i className="icon-link portfolio_button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
