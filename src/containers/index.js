import React, { useEffect, useState } from 'react';
import { loadFakeJSONComponents } from '../api';

import Header from '../components/Header';
import Footer from '../components/Footer';
import components from '../components';

import './index.css';

const App = () => {
  const [componentsData, setComponentsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchFakeJSON = async () => {
      try {
        setLoading(true);

        const response = await loadFakeJSONComponents();

        setComponentsData(response);

        setLoading(false);

      } catch (e) {
        setLoading(false);
        setError(true)
      }
    };
    fetchFakeJSON();
  }, []);

  const renderComponents = () => {
      return componentsData.components.map((component) => {
        return components[component.type]({id: component.id, ...component.metadata});
      });
  };

  const renderForm = () => {

  };


  return (
    <>
      <Header/>
      <main className="main">
        <div className="container">
          {componentsData && componentsData.components && renderComponents()}
        </div>
        {loading && <div>Загрузка</div>}
      </main>
      <Footer/>
    </>
  )
};

export default App;
