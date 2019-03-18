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
        // this.setState({ convoArray: data})
        this.showData(data)
      })
      .catch(err => console.log(err));
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
    })
    .catch(err => console.log(err))
  }

  handleCheck = (chat, arrayIndex) => {
      this.editChat(chat, arrayIndex)
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

  removeChatArr = (array, arrayIndex) => {
    this.setState(prevState => {
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
  }

  deleteChat = (id, arrayIndex, currentArray) => {
    fetch(`http://68.132.86.66:3000/chats/${id}`, {
      method: 'DELETE'
    })
    .then(data => {
      this.removeChatArr(currentArray, arrayIndex)
    })
    .catch(err => console.log(err))
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

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div className="container">
        <h1>ChatterBox</h1>
        <Header />
        <ChatList
          convoArray={this.state.convoArray}
          handleCheck={this.handleCheck}
          deleteChat={this.deleteChat}
          currentArray='convoArray'
        />
        <Form
          createChat={this.createChat}
        />
      </div>
    )
  }
}

export default App;
