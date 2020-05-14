import React from 'react';
import styled from 'styled-components';
import mainBcg from '../images/mainBcg.jpg';

const Hero = ({ img, title, max, children }) => {
  return (
    <HeroWrapper max = {max} img = {img}>
      <div className = "banner">
        <h1 className = "title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  )
}

export default Hero;

const HeroWrapper = styled.div`

  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  min-height: ${props => props.max ? 'calc(100vh - 120px)' : '60vh'};
  background: linear-gradient(rgba(0, 0, 0, 0.1), #000),
  url(${props => props.img}) center/cover no-repeat;

  .banner {
    padding: 40px;
    background-color: transparent;
    border: ${props => props.title && "3px solid #fff"};
    border-radius: 5px;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    color: var(--mainWhite);
  }

  .title {
    font-size:45px;
  }

`

Hero.defaultProps = {
  img: mainBcg
}
