import React from 'react';
import { useLocalStore } from 'mobx-react';

export const StoreContext = React.createContext(null);

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    componentsData: null,
    galleryImages: [],
    activeGalleryImages: [],
    activeSlide: 1,
    formData: {
      name: '',
      appointment_date: '',
      phone: '',
      email: '',
      comment: '',
      agreement: false,
    },
    formPopup: false,
    setComponentsData: (componentData) => {
      store.componentsData = componentData
    },
    setGalleryImages: (images) => {
      store.galleryImages = images;

      if (window.innerWidth >= 768) {
        store.activeGalleryImages = images.slice(0, 3)
      } else {
        store.activeGalleryImages = images;
      }
    },
    setActiveImages: () => {
      store.activeGalleryImages = store.galleryImages.slice(store.activeSlide === 1 ? 0 : (store.activeSlide * 3) - 3, store.activeSlide * 3);
    },
    setActiveSlide: (slideNum) => {
      store.activeSlide = slideNum;
    },
    decrementActiveSlide: () => {
      store.activeSlide = store.activeSlide - 1 < 1 ? 3 : store.activeSlide - 1;
      store.setActiveImages();
    },
    incrementActiveSlide: () => {
      store.activeSlide = store.activeSlide + 1 > 3 ? 1 : store.activeSlide + 1;
      store.setActiveImages();
    },
    setFormData: (field, value) => {
      store.formData[field] = value;
    },
    resetFormData: () => {
      store.formData = {
        name: '',
        appointment_date: '',
        phone: '',
        email: '',
        comment: '',
        agreement: false,
      }
    },
    setFormPopup: (value) => {
      store.formPopup = value;
    }
  }));

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
};

export default StoreProvider;
