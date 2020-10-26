import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App  extends Component{
  constructor(){
    super();
    this.state = {
      ninjas:[],
      searchField:''
    }
  }

  // this method is extended from Component class
  componentDidMount(){
    fetch('https://raw.githubusercontent.com/Devtechn/boruto-ninjas/master/public/ninjas.json')
    .then(response => response.json())
    .then(users => this.setState({ninjas:users}));
  }

  // this is a custom method that i've created manually
  handleChange = (e) =>{
    this.setState({searchField:e.target.value});
  }

  // this method is extended from Component class
  render(){
    const { ninjas, searchField } = this.state;
    const filteredNinjas = ninjas.filter(ninja => ninja.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Shinobi</h1>
        <SearchBox placeholder="search shinobi" changeHandler={this.handleChange}/>
        <CardList shinobi={filteredNinjas}>
        </CardList>
      </div>
    );
  }
}

export default App;
