import React, {Component} from 'react';
import Chat from './Chat.js';

class ChatList extends Component {
  render() {
    return (
      <div className="chatList">
      {this.props.convoArray.map((convo, index) => {
        return (
          <Chat
            key={index}
            convo={convo}
            arrayIndex={index}
            handleCheck={this.props.handleCheck}
          />
        )
      })}
      </div>
    )
  }
}

export default ChatList;
