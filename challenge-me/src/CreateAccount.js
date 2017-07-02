import React, { Component } from 'react';

export default class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: '',
      passwordInput: '',
      rePasswordInput: '',
      nameInput: ''
    }
    this.changePassword = this.changePassword.bind(this);
    this.changeRePassword = this.changeRePassword.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  changePassword(event) {
    this.setState({
      passwordInput: event.target.value
    })
  }

  changeRePassword(event) {
    this.setState({
      rePasswordInput: event.target.value
    })
  }

  changeUsername(event) {
    this.setState({
      usernameInput: event.target.value
    })
  }

  changeName(event) {
    this.setState({
      nameInput: event.target.value
    })
  }

  clearFields() {
    this.setState({
      usernameInput: '',
      passwordInput: '',
      rePasswordInput: '',
      nameInput: ''
    })
  }

  render(props) {

    var self = this;

    var showCaModalMask = this.props.showCreateAccount ? "modal-mask showCaModalMask container" : "modal-mask container";
    var showCaModal = this.props.showCreateAccount ? "modal-container showCaModal" : "modal-container";

    function InvalidPassword(passwordField) {
      if (self.state.passwordInput.length > 0 && self.state.rePasswordInput.length > 0) {
        if (self.state.passwordInput !== self.state.rePasswordInput) {
          return (<p className="alert-text text-center">Passwords do not match</p>);
        } else {
          return (<p className="confirm-text text-center">Passwords match! :)</p>)
        }
      } else {
        return null;
      }
    }

    return (
      <div className={showCaModalMask}>
        <div className="modal-wrapper">
          <div className={showCaModal}>

            <div className="modal-header">
              <slot name="header">Create an Account</slot>
            </div>

            <div className="modal-body">
              <InvalidPassword />
              <form className="sign-in text-center">
                Username <br/>
                <input type="text" name="username" value={this.state.usernameInput} onChange={this.changeUsername}/><br/>
                Password <br/>
                <input type="password" name="password" value={this.state.passwordInput} onChange={this.changePassword}/><br/>
                Re-Enter Password <br/>
                <input type="password" name="password" value={this.state.rePasswordInput} onChange={this.changeRePassword}/><br/>
                Name <br/>
                <input type="text" name="name" value={this.state.nameInput} onChange={this.changeName}/>
              </form>
              <button className="modal-btn" onClick={() => { this.props.displayCreateAccount(); this.clearFields() }}>CANCEL</button>
              <button className="modal-btn" onClick={() => { this.props.displayCreateAccount(); this.clearFields() }}>CREATE</button>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
