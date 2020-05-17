import React ,{Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters:[
        
      ],
      search_Field:''
    };
  }
  componentDidMount(){ //fetch data from calling api
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(items => this.setState({monsters:items}));
      //.then(response => console.log(response));
  }

  handleChange = (e) =>{ //bind this. to the content,App, where it defines
    this.setState({search_Field: e.target.value})
  };

  render(){
    const { monsters, search_Field } = this.state;
    const filteredMonsters = monsters.filter(
      monsters => monsters.name.toLowerCase().includes(search_Field.toLowerCase())
    );
    return(
      <div className="App">
        <h1>Monstersss</h1>
        <SearchBox
          placeholder="search monster"
          handleChange = {this.handleChange}
        />
        
        <CardList Monsteritems = {filteredMonsters}/>
        
      </div>
    );
  }
}

export default App;
