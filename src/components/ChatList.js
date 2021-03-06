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
            deleteChat={this.props.deleteChat}
            editChat={this.props.editChat}//prior miss info caused error on handlesubmit event
            currentArray='convoArray'
          />
        )
      })}
      </div>
    )
  }
}

export default ChatList;
