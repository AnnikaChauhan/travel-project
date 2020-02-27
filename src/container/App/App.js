import React from 'react';
import styles from "./App.module.scss";

function App() {
  return (
    <body>
      <header className={styles.appHeader}>
        <h1>Travel</h1>
      </header>
      <nav className={styles.navigation}>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
    </body>
  );
}

export default App;
