import React from 'react';
import './App.css'; // Import your CSS file

function App() {
  return (
    <div className="App">
      <h1>Hardware Inventory Management System</h1>
    <div className="sidebar">
        <header>Hardware Inventory</header>
        <ul>
          <li><a href="#"><i className="fas fa-qrcode"></i> Dashboard</a></li>
          <li><a href="#"><i className="fas fa-link"></i> Partner Brands</a></li>
          <li><a href="#"><i className="fas fa-stream"></i> Overview</a></li>
          <li><a href="#"><i className="fas fa-calendar-week"></i> Events</a></li>
          <li><a href="#"><i className="fas fa-question-circle"></i> About</a></li>
          <li><a href="#"><i className="fas fa-sliders"></i> Services</a></li>
          <li><a href="#"><i className="fas fa-envelope"></i> Contacts</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
