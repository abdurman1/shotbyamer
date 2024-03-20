import logo from './logo.svg';
import './App.css';
import backgroundVideo from './valintino.mp4'

function App() {
  return (
    
    <body>
      <header>
        <nav className="nav">
          <video autoPlay muted loop id="myVideo">
            <source src={backgroundVideo} type="video/mp4"/>
          </video>
          <div className="title">
            <p>FILMING IN ALBERTA, CANADA</p>
            <p className="bigger">MAKING MEMORIES LAST FOREVER</p>
          </div>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">CORPORATIONS</a></li>
            <li><a href="#">WEDDINGS</a></li>
            <li><a href="#">SPORTS</a></li>
            <li><a href="#">CONCERTS</a></li>
          </ul>

        </nav>
      </header>
      <main>
        <p>
          YOU NEED TO
        </p>
      </main>
      <footer>

      </footer>
    </body>
  );
}

export default App;
