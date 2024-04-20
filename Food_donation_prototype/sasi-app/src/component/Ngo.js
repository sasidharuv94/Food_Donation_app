import { Link } from 'react-router-dom';
import React from 'react';
import './Ngo.css';

export default function Ngo() {
  return (
    <div>
 
    <div className="donar-container">

 <div className="btn1">
<Link to='/ngo/Login1'className="neon-button">Login</Link></div>
<div className="donation-info">
        <h2>Importance of NGO</h2>
        <p>
        Non-Governmental Organizations (NGOs) play a crucial role in addressing societal issues and fostering positive change. These organizations, driven by a commitment to social welfare, operate independently of government control, providing a platform for citizens to actively participate in initiatives ranging from humanitarian aid and environmental conservation to education and healthcare. NGOs serve as powerful advocates for human rights, environmental sustainability, and social justice, acting as catalysts for community development and contributing significantly to building a more inclusive and equitable world.
        </p>
      </div>
<div className="btn2">
<Link to='/ngo/Register1' className="neon-button">Register</Link></div>
    </div>
    </div>
  )
}
