import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavBar.less';

export class MainNavBar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <ul className="nav-list">
                        <Link to="/">Homepage</Link>
                        <Link to="/catalog">Catalog</Link>
                        <Link to="/contacts">Contact</Link>
                        <Link to="/about">About Us</Link>
                    </ul>
                </div>
            </nav>
        )
    }
}
