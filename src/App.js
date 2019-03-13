import React, { Component } from 'react';
import ChatList from './components/ChatList.js';

import Header from './components/Header.js';
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      fav_color: ''
    }
  }

  fetchData = () => {
    fetch('http://192.168.1.131:3000/chats') //working fetch address for server
      .then(response => response.json())
      .then(data => {
        // this.showData(data)
        console.log(data);
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
    console.log(convoArray[0]);
    console.log(this.props.convoArray);
    console.log(this.state.convoArray);
    return (
      <div>
        <h1>Working React front-end</h1>
        <Header />
        <ChatList />
      </div>
    )
  }
}

export default App;
