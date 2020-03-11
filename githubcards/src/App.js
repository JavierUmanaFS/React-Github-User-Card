import React from 'react';
import './App.css';
import axios from 'axios';
import SearchUsers from './components/SearchUsers';
import UsersCard from './components/UsersCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      me: {},
      followers: [],
      searchUser: ''
    }

  }



  componentDidMount() {
    axios.get('https://api.github.com/users/javierumanafs')
      .then(res => {
        this.setState({
          me: res.data
        })
      }
      )
      .then(
        axios.get('https://api.github.com/users/javierumanafs/followers')
          .then(res => {
            this.setState({
              followers: res.data
            })
          })
      )
      .catch(err => console.log(err))
  }

  // componentDidMount() {
  //   axios.get('https://api.github.com/users/javierumanafs/followers')
  //     .then(res => {
  //       this.setState({
  //         followers: res.data
  //       })
  //     })
  // }


  render() {
    console.log(this.state.followers)
    return (
      <div className="App" >
        <h1>Hello Users</h1>
        <div>
          {/* {this.state.users.map(user => (

            ))} */}
          {/* Display Users Cards */}
          <div>
            <UsersCard
              myCard={this.state.me}
              followers={this.state.followers}
            />
          </div>

        </div>

        {/* SearchFollowers Form */}
        <SearchUsers />
        {/* UsersCard */}

      </div>
    );
  }
}

export default App;
