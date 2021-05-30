import React from 'react'
import './NavBar.css';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav className="main__nav">
                <Link to="/my-hero-academia">MHA</Link>
                <Link to="/JK">Jujutsu Kaisen</Link>
                <Link to="/naruto">Naruto</Link>
                <Link to="/Bleach">Bleach</Link>
                <Link to="/one-piece">One Piece</Link>
                <Link to="/tokyo-revengers">Tokyo Revengers</Link>
                <Link to="/">Homepage</Link>
                
            </nav>
        </div>
    )
}

export default NavBar
