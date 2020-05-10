import React from 'react';
import styled from 'styled-components';

const Title = ({ title, center }) => { // Sürekli kullanılacağı için center ile pozisyon ayarlayacağım. 
  return (
    <React.Fragment>
      <TitleWrapper className = "row" center = {center} >
          <div className = "col">
            <h2 className ="text-title"> {title} </h2>
            <div className = "title-underline"/>
          </div>
      </TitleWrapper>
    </React.Fragment>
  )
}

export default Title;

const TitleWrapper = styled.div`
  text-align: ${props => (props.center ? "center" : "left")};
  .title-underline {
    height : .25rem;
    width: 5rem;
    background: #000;
    margin: ${props => (props.center ? "0 auto" : "0")}
  }

  .text-title {
    text-transform: uppercase;
  }

`
