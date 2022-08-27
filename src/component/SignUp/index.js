import React, { Component } from "react";
import "./style.css";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      fullName: "",
      email: "",
      countryCode: "",
      mobileNumber: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      fullName: this.state.fullName,
      email: this.state.email,
      countryCode: this.state.countryCode,
      mobileNumber: this.state.mobileNumber,
      password: this.state.password,
    }
    console.log(newUser);
  }

  render() {
    return (
      <div className="signup">
        <form onSubmit={this.onSubmit}>
          <div className="container">
            <div className="signup_form card shadow p-3 mb-5 rounded">
              <h2 className="card-title">Signup</h2>
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
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="input-group input-group mb-6">
                      <span class="input-group-text" id="inputGroup-sizing-sm">
                        <i className="form-input-icon fa fa-id-card"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="full name"
                        name="fullName"
                        value={this.state.fullName}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="input-group input-group mb-6">
                      <span class="input-group-text" id="inputGroup-sizing-sm">
                        <i className="form-input-icon fa fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="input-group input-group mb-6">
                      <span class="input-group-text" id="inputGroup-sizing-sm">
                        <i className="form-input-icon fa fa-globe"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="country code"
                        name="countryCode"
                        value={this.state.countryCode}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="input-group input-group mb-6">
                      <span class="input-group-text" id="inputGroup-sizing-sm">
                        <i className="form-input-icon fa fa-phone"></i>
                      </span>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="mobile number"
                        name="mobileNumber"
                        value={this.state.mobileNumber}
                        onChange={this.onChange}
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
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="signup_button">
                  <button className="btn  btn-md">Signup</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
