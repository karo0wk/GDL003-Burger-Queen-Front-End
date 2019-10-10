import React from 'react';


/* const API = 'https://rickandmortyapi.com/api/character/';
const defaultQuery = '?name=dr&gender='; */

/* const API = 'localhost:3000/foods';
const defaultQuery = 'https://192.168.43.1'; */

const API = 'http://172.17.31.182:3000';
const defaultQuery = '/foods';

class FetchApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(API + defaultQuery)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ results: data })
      })

  }
  render() {


    if (this.state.loading) {
      return <div>loading...</div>
    }

    //conditional rendering
    return (
      <ul>
        {this.state.results.map(point =>
          <li key={point.id}>
            <a href={point}>{point.food}{point.price}</a>
            {/*<ButtonItemTwo href={point}>{point.food}{point.price}></ButtonItemTwo>*/}
          </li>
        )}
      </ul>
    );
  }


}

export default FetchApi;

/*
export default class FetchApi extends React.Component {

    state = {
        loading: true,
        name: null,
    }

async componentDidMount() {
const url = 'https://rickandmortyapi.com/api/character/';
const response = await fetch(url);
const data = await response.json();
this.setState({name: data.results[0], loading: false });
console.log(data.results[0]);
    }

    render() {
if (this.state.loading) {
    return <div>loading...</div>
}

if (!this.state.name)
return <div>No es un nombre</div>

 return (
<div>
    <div>
    <div>
        <div>{this.state.name}</div>
    </div>
    )}
    </div>
        );
    }
}
*/
