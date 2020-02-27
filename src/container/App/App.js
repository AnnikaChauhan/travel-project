import React from 'react';
import styles from "./App.module.scss";

function App() {
  return (
    <body>
      <header className={styles.appHeader}>
        <h1>Travel Site By Annika</h1>
      </header>
      <nav className={styles.navigation}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
    </body>
  );
}

export default App;
