import React from "react";
import './ServiceCard.css';
import { Link } from 'react-router-dom'
function ServiceCard({img,text,link}){
    return (
      <div className="service-card">
        <Link to={link}>
        <img src={img} alt={text} className="service-img" /></Link>
        <span className="service-text">{text}</span>
      </div>
    );
}

export default ServiceCard;