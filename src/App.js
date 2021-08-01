import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch(() => console.log("Can't get users from ", apiUrl));
  }

  handleChange = e => {
    this.setState({ searchfield: e.target.value });
  }
  
  render() {
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div className="App">
        {
          <div>
            
            <SearchBox placeholder="Search a miaou"  handleChange={this.handleChange}/>
            <CardList persons={filteredMonsters}>
              <h1>Miaou</h1>
            </CardList>
          </div>
        }
      </div>
    );
  }
}

export default App;
