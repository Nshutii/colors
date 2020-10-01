import React, { Component } from 'react';


import { Box } from './components/my-box/box';
import { Display } from './components/my-display/display'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

      searchBox: '',
      finalList: []
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }




  // this function store the inputed value in the input box
  handleChanges = (e) => {
    this.setState({ searchBox: e.target.value });


  }

  //this function takes the inputed string and separates into different colors after each ,
  handleSubmit = (e) => {

    this.setState({
      searchBox: this.state.searchBox,
      finalList: this.state.searchBox.split(",", 10)
    },
      console.log(this.state.finalList, this.state.searchBox)
    );



  }

  //this function display colors in a select tag
  handleList = () => (
    <select name="colors" id="">

      <optgroup label="Select">

        {this.state.finalList.map((list, idx) => (
          <option value={list} key={idx}>{list}</option>

        ))
        }
      </optgroup>


    </select>
  )

  render() {
    return (
      <div className="App">


        <Box placeholder="Enter colors " handleChanges={this.handleChanges} handleSubmit={this.handleSubmit} />

        <Display handleList={this.handleList} />






      </div>
    );
  }
}

export default App;
