import React from 'react';
import './NavBar.css';


function NavBar(props) {
    return (
        <div className='navbar'>
            <img className='full-logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="full-logo" />
            <img className='small-logo' src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png" alt="small-logo" />   
            <div className='clear'></div>
        </div>
        
    );
}

export default NavBar;