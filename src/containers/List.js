import React, { Component } from 'react';

import Card from '../components/Card'

const jsonData = require('../assets/data.json');

class List extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    }
  }

  async componentDidMount() {


    console.log('Fetching data');
    //We're not really fetching the data, 
    //just getting it from a file...
    this.setState({data: jsonData})
  }


  render() {

    return (
      <>
        <h1>Movie List !</h1>
        {this.state.data.map(movie => {
          return <Card key={movie.id} movie={movie} />
        })}

      </>
    );
  }
}

export default List;