import React, { Component } from 'react';

import Menu from './Menu.js';

export default class MobileNavbar extends Component {
  constructor() {
    super();
    this.state = {
      toggleMenu: false
    }
    this.displayMenu = this.displayMenu.bind(this);
  }

  displayMenu() {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
  }

  render(props) {
    return (
      <div className="container">

        <div className="navbar container">
          <div className="row">
            <div className="col-xs-8">
              <h1 className="logo">Challenge Me</h1>
            </div>
            <div className="col-xs-4">
              <button onClick={this.displayMenu} className="nav-btn pull-right"><i className="fa fa-bars"></i></button>
            </div>
          </div>
        </div>

        <Menu
        toggleMenu={this.state.toggleMenu}
        displayMenu={this.displayMenu}
        displaySignIn={this.props.displaySignIn}
        />

      </div>
    )
  }
}
