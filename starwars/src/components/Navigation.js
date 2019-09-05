import React from 'react';
import styled from 'styled-components';
import MakeCard2 from './MakeCard2.js';
import Carousel from './Carousel.js';


const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  opacity: 0.8;
  background: linear-gradient(to right, rgba(0,0,0) 40%, rgba(255,255,255) 60%);
  position: fixed;
  top: 0;
  width: 100%;
  padding-top: 50px;
`;

const Logo = styled.h1`
  font-size: 2.8rem;
  background: linear-gradient(to left, rgba(0,0,0) 35%, rgba(255,255,255) 65%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Header = styled.h2`
    background: black;
    color: white;
    border-shadow: 2px 2px #aaa;
    border-radius: 4px;
    width: 350px;
    padding: 20px;
`;


const Img1 = styled.div`
    background-image: url(${'./images/starwars4.jpg'});
    padding: 25px;
    width: 350px;
    height: 210px;
    border-radius: 8px;
    text-align: center;
    border-top: 25px;
`;

/*const Card = styled.div`
background: black;
width: 450px;
border-radius: 2px;
opacity: 0.8;
`;*/

const Button = styled.button`
    background: white;
    color: black;
    width: 98px;
    height: 58px;
    cursor: pointer;
    border: 1px solid #aaa;
    box-shadow: 2px px #aaa;
    font-size: 1.2rem;
    border-radius: 12px;
    &:hover {
        background: #aaa;
    }
`;

function Navigation(props){
	return (
        
        <div>
        <Logo>React Wars</Logo>
        <Header> {props.name} </Header>
        <Button>More Info</Button>
       
        
        </div>
		)
}

export default Navigation;