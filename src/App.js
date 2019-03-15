import React, { Component } from 'react';
import ChatList from './components/ChatList.js';
import Form from './components/Form.js';
import Header from './components/Header.js';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      feed: '',
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
  handleCreateChat = (chat) => {
    fetch('http://192.168.1.131:3000/chats', {
      body: JSON.stringify(chat),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdChat => {
      return createdChat.json()
    })
    .then(data => {
      this.updateChatArray(data, 'convoArray')
      this.fetchData()
    })
    .catch(err => console.log(err))
  }
  showData = (convos) => {
    let convoArray = []
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
  updateChatArray = (chat, array) => {
    this.setState(prevState => {
      prevState[array].push(chat)
      console.log(prevState)
      return {
        [array]: prevState[array]
      }
    })
  }
  componentDidMount() {
    this.fetchData()
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
        <Form
          handleCreateChat={this.handleCreateChat}
        />
      </div>
    )
  }
}

export default App;
