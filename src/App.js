import React from 'react';
import './App.css';
import Card from './Component/Card/Card.js';
import {CardList} from './Component/CardList/CardList.js';

 class App extends React.Component {
  constructor(){
    super();
    this.state={users:[],
      searchfield:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>this.setState({users:data},console.log(this.state.users)));
  }

  filteredCard=(e)=>{
    this.setState({searchfield:e.target.value})
  }

  render(){
    console.log(this.state.users)
    const{users,searchfield}=this.state;
    const filteredRobot=users.filter(searchfield=>searchfield.name.toLowerCase()
      .includes(this.state.searchfield.toLowerCase()))


      
    return (
      <div className="App">

        <h1>ROBO FRIENDS</h1> 
        <input type="text" placeholder="Search robots" 
        onChange={this.filteredCard}/>
        
        <CardList users={filteredRobot}/>
               
        

      </div>
    );
  }
}

export default App;
