import React, {Component} from 'react';
import CardList from './components/card-list/card-list';
import Input from './components/Input/Input';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      monsters: [],
      inputVal: ''
    }
  }
  componentDidMount = async () =>{
    const data =  fetch(`https://jsonplaceholder.typicode.com/users`);
    const res = await data
    const conv = await res.json();
    const users = await conv
    this.setState({monsters: users})
    
  }

  handleChange = e =>{
    this.setState({inputVal: e.target.value})
  }
  render(){
      const {monsters, inputVal} = this.state;
      const filteredMonsters = monsters.filter(monster =>(
        monster.name.toLowerCase().includes(inputVal.toLowerCase())
      ))
      return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <Input inputVal={inputVal} handleChange={this.handleChange} placeholder='Enter A New Monster'/>
          <CardList monsters={filteredMonsters}/>
        </div>
      );
  }
}

export default App;
