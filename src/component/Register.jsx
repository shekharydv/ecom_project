import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    

    render() {
        return (
            <div className="register-container">
                <h2>Register</h2>
                <form className="register-form" >
                    <div>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                               
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                               
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                              
                            />
                        </label>
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default Register;
