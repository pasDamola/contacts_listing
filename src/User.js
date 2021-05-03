import React, { Component } from 'react';


class User extends Component {
	
  render(){
  
  const items = this.props.profiles.map((profile) => {
            const userName = this.props.users[profile.userID].name;
            const favoriteMovie = this.props.movies[profile.favoriteMovieID].name;
            return (
              <li key={profile.id}>
                {userName}'s favorite movie is {favoriteMovie}
              </li>
            )
  })
  	return (
      <div>
      {items}
      </div>
      )
  }

}


export default User;