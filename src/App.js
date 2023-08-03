import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sitemiz yapım aşamasındadır.
          <br />
          Çok yakında aktif olacaktır.
          <br />
          <br />
          Bizi @etikbakkal instagram adresimizden takip edebilirsiniz.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/etikbakkal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Etik Bakkal Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
