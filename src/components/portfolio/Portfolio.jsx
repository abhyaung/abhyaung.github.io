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
      <h2 className="section_title">Recent Works</h2>

      <div className="work_filters">
        <span className="work_item">Everything</span>
        <span className="work_item" onClick={() => filterItem("Python")}>Python</span>
        <span className="work_item" onClick={() => filterItem("Full-Stack")}>Full-Stack</span>
        <span className="work_item" onClick={() => filterItem("Front End")}>Front End</span>
        <span className="work_item" onClick={() => filterItem("Android")}>Android</span>
        
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const{ id, image, title, category,link} = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>
              
              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a 
                href={link} 
                targrt="_blank"
                rel="noopener nonreferrer"
                className="work_button"
              >
                <i className="icon-link work_button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio