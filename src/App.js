import React from "react";
import { Toaster } from 'react-hot-toast';
import styles from "./styles/modules/app.module.scss";
import PageTitle from "./components/PageTitle";
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'

function App() {
  return (
    <>
      <div className={styles.container}>
        <PageTitle>
          TODO LIST
        </PageTitle>
        <div className={styles.app_wrapper}>
          <AppHeader/>
          <AppContent/>
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
