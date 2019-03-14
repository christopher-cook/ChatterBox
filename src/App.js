import React, { Component } from 'react';
import ChatList from './components/ChatList.js';
// import Form from './components/Form.js';
import Header from './components/Header.js';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      fav_color: '',
      convoArray: []
    }
  }

  fetchData = () => {
    fetch('http://192.168.1.131:3000/chats') //working fetch address for server
      .then(response => response.json())
      .then(data => {
        this.showData(data)
      })
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.fetchData();
  }
  showData = (convos) => {
    let convoArray =[]
    convos.forEach((convo) => {
      convoArray.push(convo)
    })
    this.setData(convoArray)
  }
  setData = (allConvos) => {
    this.setState({
      convoArray: allConvos
    })
  }
  render() {
    // console.log(this.state.convoArray); //testing fetch data
    return (
      <div>
        <h1>ChatterBox</h1>
        <Header />
        <ChatList
          convoArray={this.state.convoArray}
        />
        
      </div>
    )
  }
}

export default App;
