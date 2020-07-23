import React, { useEffect, useState } from 'react';
import { StoreContext } from './StoreProvider';
import { observer } from 'mobx-react';
import { loadFakeJSONComponents } from '../api';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FormPopup from '../components/FormPopup';
import components from '../components';

import './index.scss';


const App = observer(() => {
  const store = React.useContext(StoreContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchFakeJSON = async () => {
      try {
        setLoading(true);

        const response = await loadFakeJSONComponents();

        store.setComponentsData(response);
        store.setGalleryImages(response.components[0].metadata.images);

        setLoading(false);

      } catch (e) {
        setLoading(false);
        setError(true)
      }
    };
    fetchFakeJSON();
  }, []);

  const renderComponents = () => {
      return store.componentsData.components.map((component) => {
        return components[component.type]({ store, id: component.id, ...component.metadata});
      });
  };

  const renderForm = () => {
    return components['FormComponent']({store, ...store.componentsData.form});
  };

  return (
    <div>
      <Header/>
      <main
        className="main"
      >
        <div className="container">
          {store.componentsData && store.componentsData.components && renderComponents()}
          {store.componentsData && store.componentsData.form && renderForm()}
        </div>
        {loading && <div>Загрузка</div>}
        {error && <div>Ошибка</div>}
      </main>
      <Footer/>
      {store.formPopup && <FormPopup closeHandler={store.setFormPopup}/>}
    </div>
  )
});

export default App;
