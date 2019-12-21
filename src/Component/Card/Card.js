import React from 'react';
import './Card.css';
const Card=(props)=>{
	return(
		<div className='roboCard'>
			<img src={`https://robohash.org/${props.id}`} alt="robo"/>
			<h2>{props.name}</h2>
			<p>{props.email}</p>
		</div>
	)
}
export default Card;