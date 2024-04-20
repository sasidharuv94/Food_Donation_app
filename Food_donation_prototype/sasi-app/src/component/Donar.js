// import React from 'react';
// // import Login from './Login';
// // import Register from './Register';

// import { Link } from 'react-router-dom';




// export default function Donar() {
//   return (
//     <div>

//  <div className="btn1">
// <Link to='/donar/Login'className="neon-button">Login</Link></div>
// <div className="btn2">
// <Link to='/donar/Register' className="neon-button">Register</Link></div>
//     </div>
//   )
// }







import React from 'react';
import { Link } from 'react-router-dom';
import './Donar.css'; // Make sure to import the CSS file for styling

export default function Donar() {
  return (
    <div className="donar-container">
      <div className="btn1">
        <Link to='/donar/Login' className="neon-button">Login</Link>
      </div>

      <div className="donation-info">
        <h2>The Power of Donation</h2>
        <p>
          Your contribution can make a significant impact on the lives of those in need.
          Whether it's supporting a cause, helping the less fortunate, or contributing to
          community projects, your donation plays a crucial role in creating positive change.
        </p>
        <p>
          Join us in making a difference. Register now and be a part of the giving community!
        </p>
      </div>

      <div className="btn2">
        <Link to='/donar/Register' className="neon-button">Register</Link>
      </div>
    </div>
  );
}
