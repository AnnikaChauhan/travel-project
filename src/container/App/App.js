import React from 'react';
import styles from "./App.module.scss";
import Header from "../../component/Header";

function App() {
  return (
    <body>
        <Header/>
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
