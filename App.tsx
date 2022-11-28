import * as React from 'react';
import './style.css';
import './mystyle.css';

export default function App() {
  return (
    <div>
      <h1>Aditha Creation</h1>
      <h2 className="tagline">Creating A new Way</h2>
      </div>
  );
  import React from 'react';
import logo from '.download.png'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

}