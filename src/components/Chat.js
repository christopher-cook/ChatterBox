import React, {Component} from 'react';

class Chat extends Component {
  render() {
    return (
      <div>
      {this.props.convo.name}<br />
      {this.props.convo.feed}<br />

    </div>
    )
  }
}

export default Chat;
