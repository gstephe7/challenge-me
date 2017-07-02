import React, { Component } from 'react';

export default class CreateChallenge extends Component {
  render(props) {
    var self = this;

    function submitChallenge(e) {
      if (e.keyCode === 13) {
        self.props.createChallenge();
      }
    }

    return (
      <div className="cc-div container">

        <div className="section container">
          <div className="row">
            <div className="col-xs-12">
              <h4 className="section-title">Create a Challenge</h4>
            </div>
          </div>
        </div>

        <div className="section container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <textarea className="create-challenge center-block" type="text" placeholder="Create a Challenge (ex: Eat 20 Bananas in 4 minutes)" value={this.props.newChallenge} onChange={this.props.inputChallenge} onKeyUp={submitChallenge}></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <button className="cc-btn center-block"><i className="fa fa-bolt" onClick={this.props.createChallenge}></i></button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
