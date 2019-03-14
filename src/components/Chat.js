import React, {Component} from 'react';

class Chat extends Component {
  render() {
    return (
      <div>
    <h4>Individual Chat called here</h4>
    {this.state.convoArray[0].name}
    </div>
    )
  }
}

export default Chat;
