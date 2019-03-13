import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      fav_color: ''
    }
  }

  fetchData = () => {
    fetch('http://192.168.1.131:3000/chats') //working fetch address for server
      .then(response => response.json())
      .then(data => {
        this.showData(data)
      })
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.fetchData();
  }
  showData = (convos) => {
    let convoArray =[]
    convos.forEach((convo) => {
      convoArray.push(convo)
    })
    this.setData(convoArray)
  }
  setData = (allConvos) => {
    this.setState({
      convoArray: allConvos
    })
  }
  render() {
    return (
      <div>
        <h1>Working React front-end</h1>
        {this.state.data[0].name}
        {this.state.data[1].age}
      </div>
    )
  }
}

export default App;
