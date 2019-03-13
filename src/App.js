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
          {this.state.data.map(data => {
            return (
              <div>
                <h2>{data.name}</h2>
                <h3>{data.age}</h3>
                <h3>{data.fav_color}</h3>
              </div>
            )
          })}
      </div>
    )
  }
}

export default App;
