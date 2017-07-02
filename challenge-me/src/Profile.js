import React, { Component } from 'react';

export default class Profile extends Component {
  render(props) {
    return (
      <div className="profile section container visible-xs">
        <div className="row">
          <div className="col-xs-4">
            <img className="profile-pic img-rounded" src={this.props.img} alt="profile pic"/>
          </div>
          <div className="col-xs-8">
            <p className="profile-text">{this.props.name}</p>
            <p className="profile-text">Points: {this.props.points}</p>
            <p className="profile-text">Challenges Accepted: {this.props.challengesAccepted}</p>
            <p className="profile-text">Challenges Completed: {this.props.challengesCompleted}</p>
          </div>
        </div>
      </div>
    )
  }
}
