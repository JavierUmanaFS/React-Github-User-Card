import React from 'react';
import '../App.css';

class UsersCard extends React.Component {
  constructor() {
    super();
    this.state = {
      followersNum: '',
      followingNum: ''
    }
  }


  render() {
    return (
      <div className='cardContainer'>
        <div className='usersCard'>
          <h2>My Card</h2>
          <h3>{this.props.myCard.name}</h3>
          <img src={this.props.myCard.avatar_url} alt="Users Logo" />
          <p>Followers: {this.props.myCard.followers}</p>
          <p>Following: {this.props.myCard.following}</p>
        </div>
        <div>
          {this.props.followers.map(user => {
            return (
              <div className='usersCard' key={user.login}>
                <h3>{user.login}</h3>
                <img src={user.avatar_url} alt="Users Logo" />
                {/* <p>Followers: {this.props.user.followers}</p>
                <p>Following: {this.props.user.following}</p> */}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default UsersCard;