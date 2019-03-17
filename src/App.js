import React, { Component } from 'react';

import ChatList from './components/ChatList.js';
import Form from './components/Form.js';
import Header from './components/Header.js';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
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
  componentDidMount() {
    this.fetchData()
  }
  handleCreateChat = (newChat) => {
    fetch('http://192.168.1.131:3000/chats', {
      body: JSON.stringify(newChat),
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
      // console.log(prevState)
      return {
        [array]: prevState[array]
      }
    })
  }
  handleCheck = (chat, arrayIndex, currentArray) => {
    // console.log(task);
    // console.log(arrayIndex);
    // console.log(currentArray);
    fetch(`http://192.168.1.131:3000/chats/${chat.id}`, {
      body: JSON.stringify(chat),
      method: 'PUT',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      }
    })
    .then(updatedChat => {
      return updatedChat.json()
    })
    .then(data => {
      this.fetchData()
    })
  }



  render() {
    return (
      <div>
        <h1>ChatterBox</h1>
        <Header />
        <ChatList
          convoArray={this.state.convoArray}
          handleCheck={this.handleCheck}
        />
        <Form
          handleCreateChat={this.handleCreateChat}
        />
      </div>
    )
  }
}

export default App;
