import React from 'react'
import axios from 'axios';

class SearchUsers extends React.Component {
  state = {
    followers: [],
    searchUser: ''
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.followers !== this.state.followers) {
      console.log('new followers array');
    }
  }
  render() {
    return (
      <div>
        <input
        //value={this.state.searchFollowers} 
        //onChange={this.handleChanges} 
        />
        <button
        //onClick={this.fetchUsers}
        >
          Search Followers
        </button>
      </div>
    )
  }
}

export default SearchUsers;