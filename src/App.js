import React, { Component } from 'react';

import ChatList from './components/ChatList.js';
import Form from './components/Form.js';
import Header from './components/Header.js';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      convoArray: []
    }
  }

  fetchData = () => {
    fetch('http://68.132.86.66:3000/chats') //working fetch address for server
      .then(response => response.json())
      .then(data => {
        this.setState({ convoArray: data})
      })
      .catch(err => console.log(err));
  }

  createChat = (newChat) => {
    fetch('http://68.132.86.66:3000/chats', {
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

  updateChatArray = (chat, array) => {
    this.setState(prevState => {
      prevState[array].push(chat)
      // console.log(prevState)
      return {
        convoArray: prevState[array]
      }
    })
  }

    editChat = (chat, index) => {
    fetch(`http://68.132.86.66:3000/chats/${chat.id}`, {
      body: JSON.stringify(chat),
      method: 'PUT',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      }
    })
    .then(jChat => {
      return jChat.json()
    })
    .then(data => {
      this.fetchData()
    })
    .catch(err => console.log(err))
  }

  handleCheck = (chat, arrayIndex) => {
    this.editChat(chat, arrayIndex)
  }

  componentDidMount() {
    this.fetchData()
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
          createChat={this.createChat}
        />
      </div>
    )
  }
}

export default App;
