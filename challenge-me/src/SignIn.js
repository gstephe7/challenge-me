import React, { Component } from 'react';

export default class SignIn extends Component {
  render(props) {
    var showModalMask = this.props.showSignIn ? "modal-mask showModalMask container" : "modal-mask container";
    var showModal = this.props.showSignIn ? "modal-container showModal" : "modal-container";
    return (
      <div className={showModalMask}>
        <div className="modal-wrapper">
          <div className={showModal}>

            <div className="modal-header">
              <slot name="header">Sign In</slot>
            </div>

            <div className="modal-body">
              <form className="sign-in text-center">
                Username <br/>
                <input type="text" name="username" /><br/>
                Password <br/>
                <input type="password" name="password" /><br/>
              </form>
              <button className="modal-btn" onClick={this.props.displaySignIn}>CANCEL</button>
              <button className="modal-btn" onClick={this.props.displaySignIn}>SIGN IN</button>
              <br />
              <p className="text-center">
                Don't have an account?
              </p>
              <p className="text-center">
                <a onClick={() => { this.props.displaySignIn();  this.props.displayCreateAccount() }}>Create an Account</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
