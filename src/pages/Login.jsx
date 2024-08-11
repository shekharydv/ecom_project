import React, { useState } from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "mor_2314",
      password: "83r5^_",
      error: "",
    };
  }

  handleLogin = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };
  
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token) {
          this.props.onLogin();
        } else {
          this.setState({ error: "Invalid login credentials" });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Sign in to your account
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.handleLogin();
              }}
              className="mt-8"
            >
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                      type="text"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={(e) =>
                        this.setState({ username: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </div>
                </div>
                {this.state.error && (
                  <p className="text-red-500">{this.state.error}</p>
                )}
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
