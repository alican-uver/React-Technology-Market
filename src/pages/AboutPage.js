import React, { Component } from 'react';
import Info from '../components/AboutPage/Info';
import Hero from '../components/Hero';
import aboutBcg from '../images/aboutBcg.jpeg';

class AboutPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero img={aboutBcg} />   
        <Info />
      </React.Fragment>
    )
  }
}

export default AboutPage;