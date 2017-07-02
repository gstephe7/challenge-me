import React, { Component } from 'react';

export default class RandomChallenge extends Component {

  componentWillMount(props) {
    this.props.generateRandomChallenge();
  }

  render(props) {
    return (
      <div className="random-div container">

        <div className="section container">
          <div className="row">
            <div className="col-xs-12">
              <h4 className="section-title">Random Challenges</h4>
            </div>
          </div>
        </div>

        <div className="section current-challenge container">
          <div className="row">
            <div className="col-xs-12">
              <p>{this.props.randomChallenge}</p>
            </div>
          </div>
        </div>

        <div className="section container">
          <div className="row">
            <div className="col-xs-3">
              <button className="skip-btn" onClick={this.props.generateRandomChallenge}>SKIP</button>
            </div>
            <div className="col-xs-3">
              <button><i className="fa fa-thumbs-down"></i></button>
            </div>
            <div className="col-xs-3">
              <button className="pull-right"><i className="fa fa-thumbs-up"></i></button>
            </div>
            <div className="col-xs-3">
              <button className="accept-btn pull-right">TAKE</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
