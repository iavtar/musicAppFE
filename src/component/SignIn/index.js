import React, { Component } from "react";
import "./style.css";

class SignIn extends Component {
  render() {
    return (
      <div className="signin">
        <form onSubmit={this.onSubmit}>
          <div className="container">
            <div className="signin_form card shadow p-3 mb-5 rounded">
              <h2 className="card-title">SignIn</h2>
              <hr />
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="input-group input-group mb-6">
                      <span class="input-group-text" id="inputGroup-sizing-sm">
                        <i className="form-input-icon fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="username"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="input-group input-group mb-6">
                      <span class="input-group-text" id="inputGroup-sizing-sm">
                        <i className="form-input-icon fa fa-unlock-alt"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="signin_button">
                  <button className="btn  btn-md">SignIn</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
