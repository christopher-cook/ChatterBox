import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    this.setState({
      feed: event.target.value
      })
  }
  clearForm = () => {
    this.setState({ feed: ''})
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
        <input type="text" value={this.props.feed} onChange={this.handleChange} placeholder="enter comment here..." />
        <button type="submit" className="subButton">Submit</button>
      </form>
      </div>
  )
  }
}

export default Form;
