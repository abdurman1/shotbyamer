import React, {useState} from 'react'
import './navbar.css';
import {Link} from 'react-router-dom';

function navbar() {
  return (
    <div>
        <body>
            <header>
                <nav className="nav">                
                <div className="title">
                    <p>FILMING IN ALBERTA, CANADA</p>
                    <p className="bigger">MAKING MEMORIES LAST FOREVER</p>
                </div>
                <ul>
                    <li>
                        <Link to='/'>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to='/corporations'>
                            CORPORATIONS
                        </Link>
                    </li>
                    <li>
                        <Link to='/weddings'>
                            WEDDINGS
                        </Link>
                    </li>
                    <li>
                        <Link to='/sports'>
                            ATHLETICS
                        </Link>
                    </li>
                    <li>
                        <Link to='/concerts'>
                            CONCERTS
                        </Link>
                    </li>
                </ul>
                </nav>
            </header>
        </body>
    </div>
  )
}

export default navbar
