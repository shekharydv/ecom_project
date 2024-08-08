import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
      
    
      render() {
        return (
          <div className="login-container">
            <form  className="login-form">
              <h2>Login</h2>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                 
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