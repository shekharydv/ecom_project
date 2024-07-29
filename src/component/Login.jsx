import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
        };
      }
    
      handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', this.state.username);
        console.log('Password:', this.state.password);
      };

      
    
      render() {
        return (
          <div className="login-container">
            <form onSubmit={this.handleSubmit} className="login-form">
              <h2>Login</h2>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </div>
              <></>
              <button type="submit">Login</button>
              <div>
                        <Link to="/dashboard">Dashboard</Link>
                    </div>
            </form>
          </div>
        );
      }
    }
    
    export default Login;