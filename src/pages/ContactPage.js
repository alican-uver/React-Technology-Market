import React, { Component } from "react";
import Hero from "../components/Hero";
import contactBcg from "../images/contactBcg.jpg";
import Contact from "../components/ContactPage/Contact";

class ContactPage extends Component {
  render() {
    return (
    <React.Fragment>
      <Hero img = {contactBcg} />
      <Contact />
    </React.Fragment>
    )
  }
}

export default ContactPage;
