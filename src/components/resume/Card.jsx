import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline_item">
        <i className={props.icon}></i>
        <span className="timeline_date">{props.year}</span>
        <h3 className="timeline_title">{props.title}</h3>
        {Array.isArray(props.desc) ? (
          <ul className="timeline_desc">
            {props.desc.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        ) : (
          <p className="timeline_desc">{props.desc}</p>
        )}
    </div>
  )
}

export default Card