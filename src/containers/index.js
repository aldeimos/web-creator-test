import React, { useEffect } from 'react';
import { loadFakeJSONComponents } from '../api';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './index.css';

const App = () => {

  useEffect(() => {
    const fetchFakeJSON = async () => {
      const response = await loadFakeJSONComponents();
      console.log(response);
    };

    fetchFakeJSON();
  }, []);
  return (
    <>
      <Header/>
      <main className="main">
        <div className="container">

        </div>
      </main>
      <Footer/>
    </>
  )
};

export default App;
