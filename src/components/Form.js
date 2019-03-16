import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyed_item: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    this.setState({
      value: event.target.value
      })
  }
  clearForm = () => {
    this.setState({ keyed_item: ''})
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleCreateChat();
    this.clearForm()
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.props.keyed_item} onChange={this.handleChange} placeholder="commenter name" />
        <input type="text" value={this.props.keyed_item} onChange={this.handleChange} placeholder="enter comment here..." />
        <button type="submit" className="subButton">Submit</button>
      </form>
      </div>
  )
  }
}

export default Form;
