import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./App.module.scss";
import NavBar from '../../component/NavBar/NavBar';
import Main from '../../component/Main/Main';
import Footer from '../../component/Footer/Footer';

function App() {
  return (
    <main className={styles.content}>
        <NavBar />
        <Main />
        <Footer />
    </main>
  );
}

export default App;
