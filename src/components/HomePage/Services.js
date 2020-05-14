import React, { Component } from "react";
import styled from "styled-components";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";

class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "free shipping",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, alias.",
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: "30 days return policy",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, alias.",
      },
      {
        id: 3,
        icon: <FaDollarSign />,
        title: "Secured payment",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, alias.",
      },
    ],
  };
  render() {
    return (
      <ServicesWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.services.map((item) => {
              return (
                <div
                  className="mx-auto col-sm-6 col-md-3 text-center"
                  key={item.id}
                >
                  <div className="service-icon">{item.icon}</div>
                  <div className="mt-3 text-capitalize">{item.title}</div>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

export default Services;

const ServicesWrapper = styled.div`
  background: var(--mainGrey);
  .service-icon {
    font-size: 2.5rem;
    color: var(--darkBlue)
  }

  p {
    margin-top: 10px;
  }
`;
