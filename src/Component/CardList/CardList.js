import React from 'react';
import './CardList.css';
import Card from '../Card/Card.js';

 export const CardList=({users})=>{
	

	return(
		<div className="list">
			{
				users.map(users=>
					<Card key={users.id} name={users.name} email={users.email} id={users.id}/>)
			}
	</div>
	);
}

