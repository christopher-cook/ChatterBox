import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      feed: '',
      submit: 'addChat'
    }

  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
      })
  }
  clearForm = () => {
    this.setState({ name: '', feed: '', submit: 'addChat'})
  }
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.submit === 'addChat') {
      this.props.handleCreateChat(this.state);
  } else {
    let updatedChat = {
      id: this.props.chat.id,
      name: this.props.chat.name,
      feed: this.props.chat.feed
    }
    this.props.handleCheck(updatedChat, this.props.index, 'chats')
    this.props.changeState()
  }
    this.clearForm()
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.name} id="name" onChange={this.handleChange} placeholder="commenter name" />
        <input type="text" value={this.state.feed} id="feed" onChange={this.handleChange} placeholder="enter comment here..." />
        <button type="submit" className="subButton">Submit</button>
      </form>
      </div>
  )
  }
}

export default Form;
