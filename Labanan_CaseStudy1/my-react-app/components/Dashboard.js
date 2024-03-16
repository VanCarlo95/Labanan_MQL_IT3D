import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Your header content */}
        </header>
        <div className="sidebar">
          <header>Hardware Inventory</header>
          <ul>
            <li><Link to="/dashboard"><i className="fas fa-qrcode"></i> Dashboard</Link></li>
            <li><Link to="/partner-brands"><i className="fas fa-link"></i> Partner Brands</Link></li>
            <li><Link to="/overview"><i className="fas fa-stream"></i> Overview</Link></li>
            <li><Link to="/events"><i className="fas fa-calendar-week"></i> Events</Link></li>
            <li><Link to="/about"><i className="fas fa-question-circle"></i> About</Link></li>
            <li><Link to="/services"><i className="fas fa-sliders"></i> Services</Link></li>
            <li><Link to="/contacts"><i className="fas fa-envelope"></i> Contacts</Link></li>
          </ul>
        </div>
        <Switch>
          <Route path="/dashboard">
            {/* Dashboard component */}
          </Route>
          <Route path="/partner-brands">
            {/* Partner Brands component */}
          </Route>
          <Route path="/overview">
            {/* Overview component */}
          </Route>
          <Route path="/events">
            {/* Events component */}
          </Route>
          <Route path="/about">
            {/* About component */}
          </Route>
          <Route path="/services">
            {/* Services component */}
          </Route>
          <Route path="/contacts">
            {/* Contacts component */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
