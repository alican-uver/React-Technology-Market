import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";

const Footer = () => {
  return (
    <ProductConsumer>
      { value => {
        return (
          <FooterWrapper>
            <div className="container text-center py-3">
              <div className="row mb-4">
                {  value.socialIcons.map((icon) => {
                      return (
                        <div key = {icon.id} 
                          className = "col-sm-3">
                            <a href = {icon.url} className = "footer-icon"> 
                            {icon.icon}
                             </a>
                        </div>
                      )
                  }) 
                }
              </div>
              <div className="row">
                <div className="col-md-12 text-capitalize text-white">
                  &copy; tech store {new Date().getFullYear()} all rights
                  reserved
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
background: var(--darkBlue);
.footer-icon {
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--mainWhite) ;
  &:hover {
    color: var(--mainBlue);
  }
}
`;
