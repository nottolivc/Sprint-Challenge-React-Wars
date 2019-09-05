import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Navigation from './components/Navigation.js';
import MakeCard from './components/MakeCard.js';
import MakeCard2 from './components/MakeCard2.js';
import Carousel from './components/Carousel.js';


/* Questions:
Thinking in react is thinking in an environment where the DOM is not re rendered every time there is a change, instead 
you are updating one small element at a time so it is more effective and you are able through State, to re render various 
html css and javascript to the DOM one piece at a time. Props is simply passing down data to sub components, it allows you to break up 
your app in to several components making it ideal for a dev team. Effects is synced through useEffect and it prevents infinite API calls for example, data leakage.*/

/* Create div for content using flex box */
const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

/*const Navbar1 = styled.nav`
margin: 0 auto;
display: flex;
flex-direction: row;
justify-content: space-around;
background: white;
color: black;
height: 100px;
font-size: 1.6rem;
width: 100%;
box-shadow: 2px 2px #aaa;
`;*/

/* Create a div container to hold the persons pulled from API data */
const Persons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-flow;
`;
/* declare the App function stored in variable to be rendered on DOM */
const App = () => {
/* Set the State of data */
const [data , setData] = useState([]);

/* axios GET data from the variable that is the API */
const url = 'https://swapi.co/api/people/';
/* useEffect to limit API calls and leakage */  
useEffect(() => {
    axios.get(url)
      .then((response) => {
        console.log(response.data.results);
        setData(response.data.results);   
    })
      .catch((error) => console.log('the force is not with you...'))
  }, [])
/* Return in () the div where React Wars will be the class App and rendered 
  Fetched characters from the star wars api in an effect hook. */

/* next, fix the header*/

  const header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  line-height: 20px;
  background-color: white;
  font-size: 2.4rem;
  color: black;
  box-shadow: 2px 2px #aaa;
  `;

  const fixedText = 'fixed';
 /* Use State to fix header at the top w sticky class on scroll */
  const [headerText, setHeaderText] = useState(fixedText);
  useEffect(() => {
    const header = document.getElementById('myHeader');
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
        if (headerText !== fixedText) {
          setHeaderText(fixedText);
        }
      } 
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  function showMore() {
    return (
        <MakeCard2 />
      )
    }


    
 /* return App */

  return (  
    <div className='App'>
{/* style content div and .map data below to return an array of characters to be rendered in Content Persons*/} 
{/* Pull (via return statement) in data with keys to be passed as props to the MakeCard default function generating an array in Persons */}
{/* import navigation and make card functions to render props */}
<header className='header' id='myHeader'><h1>React Wars</h1></header>

    <Content>
        {data.map((character, index) => {
          return (
              <Persons className='person' key={index}>
              <Navigation key={index} name={character.name} />
              <MakeCard key={index} name={character.name} size={character.mass} location={character.url} height={character.height} age={character.birth_year} species={character.species}/>
              </Persons>
            )
          }
        )
      }
      
      </Content>
      
    </div>

    );
}

export default App;
