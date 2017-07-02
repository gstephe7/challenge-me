import React, { Component } from 'react';

export default class CompletedChallenges extends Component {

  componentWillMount(props) {
    this.props.generateRandomVideo();
  }

  render(props) {

    var self = this;

    function DisplayVideo(props) {
      return (
        <video className="center-block" width="300px" height="300px" controls autoPlay loop>
          <source type="video/mp4" src={self.props.randomVideoSrc}/>
        </video>
      )
    }

    return (
      <div className="completed-div container">

        <div className="section container">
          <div className="row">
            <div className="col-xs-12">
              <h4 className="section-title">Completed Challenges</h4>
            </div>
          </div>
        </div>
          <DisplayVideo />
        <div className="section container">
          <div className="row">
            <div className="col-xs-12">
              <p>Video Points: {this.props.randomVideoPoints}</p>
            </div>
          </div>
        </div>

        <div className="section container">
          <div className="row">
            <div className="col-xs-4">
              <button><i className="fa fa-thumbs-down"></i></button>
            </div>
            <div className="col-xs-4">
              <button className="center-block"><i className="fa fa-thumbs-up"></i></button>
            </div>
            <div className="col-xs-4">
              <button className="pull-right" onClick={this.props.generateRandomVideo}>NEXT</button>
            </div>
          </div>
        </div>

      </div>

    )
  }
}
