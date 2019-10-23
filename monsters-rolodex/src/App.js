import React from 'react';

import { CardList } from './components/cardList/CardList'


import './App.css';

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        <input type='search' placeholder='search monsters' onChange={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;