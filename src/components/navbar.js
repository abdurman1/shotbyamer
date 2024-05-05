import React, {useState} from 'react'
import './navbar.css';

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
                    <li><a href="#">HOME</a></li>
                    <li><a href="./firstPg.js">CORPORATIONS</a></li>
                    <li><a href="#">WEDDINGS</a></li>
                    <li><a href="#">SPORTS</a></li>
                    <li><a href="#">CONCERTS</a></li>
                </ul>
                </nav>
            </header>
            <main>
                <p>
                
                </p>
            </main>
            <footer>

            </footer>
        </body>
    </div>
  )
}

export default navbar
