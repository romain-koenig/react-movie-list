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
    this.setState({ data: jsonData })
  }


  render() {

    return (
      <>
        <nav className='navbar sticky-top navbar-light bg-dark'>
          <h1 className='navbar-brand text-light'>Movie List</h1>
        </nav>
        <div className="row">
          {this.state.data.map(movie => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4">
                <Card key={movie.id} movie={movie} />
              </div>
            )
          })}
        </div>

      </>
    );
  }
}

export default List;