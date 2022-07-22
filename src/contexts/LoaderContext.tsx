import { createContext, useState } from 'react';

interface ILoaderContext {
  showLoader: boolean;
  setLoaderValue: (showLoader: boolean) => void;
}

const LoaderContext = createContext<ILoaderContext>({
  showLoader: false,
  setLoaderValue: () => {},
});

export const useLoader = () => {
  const [showLoader, setLoaderValue] = useState(false);
  return {
    showLoader,
    setLoaderValue,
  };
};

export default LoaderContext;
