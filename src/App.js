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
        // console.log(data);
        this.setState({
          data: data
        })
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
    console.log(this.state.convoArray);
    console.log(this.state.);
    return (
      <div>
        <h1>Working React front-end</h1>
        {data.name}
        <Header />
        <ChatList />
      </div>
    )
  }
}

export default App;
