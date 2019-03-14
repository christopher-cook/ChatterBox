import React, {Component} from 'react';
import Chat from './Chat.js';

class ChatList extends Component {
  render() {
    return (
      {this.props.convoArray.map((convo, index) => {
        return (
          <Chat
            key={index}
            convo={convo}
          />
        )
      })}
    )
  }
}

export default ChatList;
