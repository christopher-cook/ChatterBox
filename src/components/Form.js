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
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
      })
  }
  clearForm = () => {
    this.setState({
      name: '',
      feed: '',
      submit: 'Add Comment'
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.submit === 'addChat') {
      this.props.createChat(this.state)
      this.clearForm()
  } else {
    let updatedChat = {
      id: this.props.chat.id,
      name: this.state.name,
      feed: this.state.feed
    }
    this.props.handleCheck(updatedChat, this.props.arrayIndex, 'convoArray')
    this.props.changeState()
  }
  }
  checkForEdit = () => {
    if(this.props.convo) {
      this.setState({
        name: this.props.convo.name,
        feed: this.props.convo.feed,
        submit: 'Update'
      })
    }
  }
  componentDidMount() {
    this.checkForEdit()
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          value={this.state.name}
          id="name"
          onChange={this.handleChange}
          placeholder="commenter name" />

        <input type="text"
          value={this.state.feed}
          id="feed"
          onChange={this.handleChange}
          placeholder="enter comment here..." />

        <button type="submit">{this.state.submit}</button>
      </form>
      </div>
  )
  }
}

export default Form;
