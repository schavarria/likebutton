import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.css'
class App extends Component {
  state={
    clicks:0,
    likes: 'Likes'
  }


handleClick=(e) => {
  if (this.state.clicks === 0){
    this.setState({
      likes: 'Like'
    })
  } else {
    this.setState({
      likes: 'Likes'
    })
  }
  this.setState({
   clicks: this.state.clicks +1
  })
}

  render() {
    return (
      <div className="App">
        <button onClick ={this.handleClick}> {this.state.clicks} {this.state.likes} <i className="fa fa-heart"></i> </button>
      </div>
    );
  }
}

export default App;

