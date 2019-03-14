import React, {Component} from 'react';

class Chat extends Component {
  render() {
    return (
      <div className ="chatz">
      {this.props.convo.name}<br />
      {this.props.convo.age}<br />
      {this.props.convo.fav_color}<br />

    </div>
    )
  }
}

export default Chat;
