import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMapsLoader from './components/Map/loader'
import MapComponent from './components/Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <GoogleMapsLoader
          render={googleMaps =>
            googleMaps && (
              <MapComponent google={googleMaps}/>
            )
          }
        />
      </div>
    );
  }
}

export default App;
