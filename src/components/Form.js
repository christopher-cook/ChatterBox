import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyed_item: ''
    }
  }
  handleChange = (e) => {
    this.setState({ keyed_item: e.target.value})
  }
  clearForm = () => {
    this.setState({ keyed_item: ''})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleCreateChat(keyed_item);
    this.clearForm()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.keyed_item} onChange={this.handleChange} placeholder="enter comment here..."/>
        <button type="submit" className="subButton">Submit</button>
      </form>
  )
  }
}

export default Form;
