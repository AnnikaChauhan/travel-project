import React from 'react';
import styles from "./App.module.scss";
import NavBar from '../../component/NavBar/NavBar';
import Main from '../../component/Main/Main';

function App() {
  return (
    <main className={styles.content}>
        <NavBar />
        <Main />
    </main>
  );
}

export default App;
