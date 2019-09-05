import React from 'react';
import styled from 'styled-components';

const Descriptions = styled.h4`
  padding-top: 20px;
  color: aqua;
  background-color: black;
  width: 450px;
  height: 50px;
  font-size: 1.6rem;
  text-align: center;
  border-radius: 2px;
`;

const Card = styled.div`
background: black;
width: 450px;
color: white;
border-radius: 4px;
border: 1px solid #aaa;
`;

function MakeCard(props){
	return (
        <Card>
        <h2>Profile </h2>
        <div>
		
        <Descriptions> Name: {props.name} </Descriptions>
		<Descriptions> Size: {props.size} </Descriptions>
		<Descriptions> Age: {props.age} </Descriptions>
		<Descriptions> Species: {props.species} </Descriptions>
        </div>
        </Card>
	)
}


export default MakeCard;