export const createAppStore = () => {
  return {
    currentSlidePage: 1,
    changeSliderPage: (slidePage) => {
      this.currentSlidePage = slidePage
    }
  }
};
