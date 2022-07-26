import { createContext, useState } from 'react';

interface ILoaderContext {
  showLoader: boolean;
  setShowLoader: (showLoader: boolean) => void;
}

const loaderContext = createContext<ILoaderContext>({
  showLoader: true,
  setShowLoader: () => {},
});

export const useLoader = () => {
  const [showLoader, setShowLoader] = useState(true);
  return {
    showLoader,
    setShowLoader,
  };
};

export default loaderContext;
