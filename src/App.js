import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navbar from './navbar/navbar';
import Logo from './logo/logo';
import Signin from './signin/signin';
import Dashboard from './dashboard/dashboard';

const params = {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "speed": 6,
        "size_min": 0.3
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "random": true,
      "speed": 3,
      "direction": "top",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      }
    },
    "modes": {
      "bubble": {
        "distance": 250,
        "duration": 2,
        "size": 0,
        "opacity": 0
      },
      "repulse": {
        "distance": 400,
        "duration": 4
      }
    }
  }
}



class App extends Component {

  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {

    this.setState({ searchfield: event.target.value })

  }

  render() {

    const { robots, searchfield } = this.state;
    const filterer = robots.filter(robo => {
      return robo.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return (


      <div className="App">


        <Particles className="background"
          params={params} />
        <Navbar />
        <Logo />
        <Dashboard robots={filterer} searchchange={this.onSearchChange} />
        {/* <Signin /> */}



      </div>

    );
  };

}


export default App;
