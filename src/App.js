import "./styles.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedCountry: "in", // Set default country
    };
  }

  handleCountryChange = (countryCode) => {
    this.setState({ selectedCountry: countryCode });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar onCountryChange={this.handleCountryChange}/>
          <Routes>
          <Route exact path="/" element={<News key={`general${this.state.selectedCountry}`} pageSize={12} country={this.state.selectedCountry} category="general"/>}/>
          <Route exact path="/business" element={<News key={`business${this.state.selectedCountry}`} pageSize={12} country={this.state.selectedCountry} category="business"/>}/>
          <Route exact path="/entertainment" element={<News key={`entertainment${this.state.selectedCountry}`} pageSize={12} country={this.state.selectedCountry} category="entertainment"/>}/>
          <Route exact path="/health" element={<News key={`health${this.state.selectedCountry}`} pageSize={12} country={this.state.selectedCountry} category="health"/>}/>
          <Route exact path="/science" element={<News key={`science${this.state.selectedCountry}`} pageSize={12} country={this.state.selectedCountry} category="science"/>}/>
          <Route exact path="/sports" element={<News key={`sports${this.state.selectedCountry}`} pageSize={12} country={this.state.selectedCountry} category="sports"/>}/>
          <Route exact path="/technology" element={<News key={`technology${this.state.selectedCountry}`} pageSize={12} country={this.state.selectedCountry} category="technology"/>}/>
          
          </Routes>
            {/* <News pageSize={6}/> */}
        </Router>
      </div>
    );
  }
}
