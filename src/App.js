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
    fetch('http://192.168.1.131:3000/fuzzys')
      .then(data => data.json())
      .then(fuzzyData => {
        // this.showFuzzys(fuzzyData)
        console.log('fuzzyData);
      })
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.fetchData();
  }
  // showFuzzys = (fuzzys) => {
  //   let fuzzyArray =[]
  //   fuzzys.forEach((fuzzy) => {
  //     fuzzyArray.push(fuzzy)
  //   })
  //   this.setFuzzys(fuzzyArray)
  // }
  // setFuzzys = (allSet) => {
  //   this.setState({
  //     fuzzyArray: allSet
  //   })
  // }
  render() {
    // console.log(fuzzyData);
    // console.log(data);
    return (
      <div>
      <h1>Working React front-end</h1>
      </div>
    )
  }
}

export default App;
