import React, { useState } from 'react'
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })
  }

  return (
    <section className="work container section" id="work">
      <h2 className="section_title">My Projects</h2>
      <div className="work_container">
        {items.map((elem) => {
          const{ id, image, title, category, link, description} = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <span className = "work_category">{category}</span>
                <div className = "information">
                  <h3 className="work_title">{title}</h3>
                  <p className="work_description">{description}</p>
                </div>
                <a 
                  href={link} 
                  targrt="_blank"
                  rel="noopener nonreferrer"
                  className="work_button"
                >
                  <i className="icon-link work_button-icon"></i>
                </a>
              </div>
              
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio