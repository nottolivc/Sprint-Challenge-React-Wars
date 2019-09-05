import React from 'react';
import styled from 'styled-components';

const Descriptions2 = styled.h4`
  padding: 25px; 
  color: aqua;
  background-color: black;
  width: 400px;
  height: 50px;
  font-size: 1.6rem;
  text-align: center;
  border-radius: 2px;
`;

const Card2 = styled.div`
background: whitesmoke;
width: 450px;
border-radius: 2px;
border: 1px solid #aaa;
`;


function MakeCard2(props){
	return (
        <Card2>
        <h1>Profile </h1>
        <div>
		
        <Descriptions2> Name: {props.name} </Descriptions2>
		<Descriptions2> Age: {props.age} </Descriptions2>
		<Descriptions2> Height: {props.height} </Descriptions2>
		<Descriptions2> Location: {props.location} </Descriptions2>
        </div>
        </Card2>
	)
}


export default MakeCard2;