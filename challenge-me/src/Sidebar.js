import React, { Component } from 'react';

export default class Sidebar extends Component {
  render(props) {
    return (
      <div className="sidebar section container">
        <div className="row">
          <div className="col-sm-12">
            <img className="profile-pic img-rounded" src={this.props.img} alt="profile pic"/>
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
