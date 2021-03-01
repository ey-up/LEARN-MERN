import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import List from "./components/List";

class App extends Component {
  state = {
    list: [],
    todo: "",
  };

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
    //console.log(this.state); 
  };

  handleSubmit = () => {
    const newItem = {
      text: this.state.todo,
      id: Date.now(),
    };
    
    // let temp = this.state.list;
    // temp.push(newItem);
    // this.setState((state) => ({
    //   list: temp,
    //   todo: "",
    // }));

    this.setState({list:[...this.state.list,newItem],todo:""},()=>{
      console.log(newItem,"eklendi")
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Button">
            <abbr title="Yapmak istediğin şeyleri ekle">Yapılacaklar</abbr>
          </h1>
          <List list={this.state.list} />
          <input
            list="items"
            value={this.state.todo}
            type="text"
            onChange={this.handleChange}
          ></input>
      
          <datalist id="items">
            <option value="Do homework"></option>
            <option value="Buy a new dress"></option>
            <option value="Do the shopping"></option>
          </datalist>
          <Button onClick={this.handleSubmit} variant="outline-primary">
            Ekle
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
