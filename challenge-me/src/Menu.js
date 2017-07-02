import React, { Component } from 'react';

export default class menu extends Component {
  render(props) {
    var slide = this.props.toggleMenu ? 'showMenu menu container' : 'menu container';

      return (
          <div className={slide}>
            <div className="row">
              <div className="col-xs-12">
                <ul className="pull-right">
                  <li className="menu-item text-right">
                    <a className="menu-item" onClick={() => { this.props.displaySignIn(); this.props.displayMenu() }}>Sign In/Sign Out</a>
                  </li>
                  <li className="menu-item text-right">
                    <a className="menu-item" onClick={this.props.displayMenu}>My Challenges</a>
                  </li>
                  <li className="menu-item text-right">
                    <a className="menu-item" onClick={this.props.displayMenu}>Accepted Challenges</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      )
  }
}
