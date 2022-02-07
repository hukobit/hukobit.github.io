import Mainpage from "../Components/Mainpage";
import Footer from "../Components/Footer";
import React, { Component } from 'react';
import Hero from "../Components/Hero";

export default class HomePage extends Component {
  render() {
    return <div>

            <Hero />
            <Mainpage />
            <Footer />
            </div>;
  }
}
