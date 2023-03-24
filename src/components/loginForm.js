import React from "react";

export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="login-form">
        <h3 className="login-header">Log In</h3>
        <div className="login-body">
          <form>
            <label>
              Username:
              <input type="text" id="username" name="username" />
            </label>
            <br />
            <label>
              Password:
              <input type="password" id="password" name="password" />
            </label>
            <br />
          </form>
        </div>
      </div>
    );
  }
}
