import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      feed: ''
    }

  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
      })
  }
  clearForm = () => {
    this.setState({ name: '', feed: ''})
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleCreateChat(this.state);
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
