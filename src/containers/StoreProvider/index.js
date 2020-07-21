import React from 'react';
import { useLocalStore, useObserver } from 'mobx-react';

export const StoreContext = React.createContext(null);

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    memes: ['kek', 'lol'],
    addMeme: (newMeme) => {
      store.memes.push(newMeme)
    },
  }));

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
};

export default StoreProvider;
