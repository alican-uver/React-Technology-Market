import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context/context';

const SideBar = () => {
  return (
    <ProductConsumer>
      {
        value => {
          const { links, sidebarOpen, handleSidebar } = value;
          return <SidebarWrapper show = {sidebarOpen}>
            <ul>
              {links.map(link => {
                return (
                  <li key={link.id}>
                    <Link to={link.path} className="sidebar-link" onClick = {handleSidebar}>
                      {link.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </SidebarWrapper>
        }
      }
    </ProductConsumer>
  )
}

export default SideBar;


const SidebarWrapper = styled.div`
  position:fixed;
  top: 122px;
  left: 0;
  width: 30%;
  height: 100%;
  background-color: #f1f1f1;
  z-index: 1;
  border-right: 2px solid #f1f1f1;
  transition: all .3s cubic-bezier(1, 0, 0, 1);
  transform: ${ props => props.show ? 'translateX(0)' : 'translateX(-100%)'};

  ul {
    list-style-type: none;
    padding: 0;
  }

  .sidebar-link {
    display: block;
    width: 100%;
    font-size: 25px;
    text-transform: capitalize;
    color: #000;
    padding: 10px 15px;
    background: transparent;
    transition: all .4s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover{
      background: #fff;
      padding-left: 25px;
      text-decoration: none;
    }
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    text-align:center;
  }


`