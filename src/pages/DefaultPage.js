import React, { Component } from 'react';
import Hero from '../components/Hero';
import notFound from '../images/notFound.jpg';
import { Link } from 'react-router-dom';

class DefaultPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero img = {notFound} title = "404" max = "true">
          <h2 className ="text-uppercase">page not found</h2>
          <Link to = "/" className = "main-link mt-2"> Return Home</Link>
        </Hero>
      </React.Fragment>
    )
  }
}

export default DefaultPage;