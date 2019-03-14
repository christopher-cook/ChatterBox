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
  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.handleCreateChat();
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.chatInfo}/>
      </div>
  )
  }
}

export default Form;
