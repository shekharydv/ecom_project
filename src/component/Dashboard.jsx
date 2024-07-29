import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
    render() {
        return (
            <><div><h1>Dashboard</h1></div>
            <div>
            <Link to="/">Home</Link>
          </div></>
         );
    }
}

export default Dashboard;