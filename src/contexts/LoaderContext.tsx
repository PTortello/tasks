import { createContext, useState } from 'react';

interface ILoaderContext {
  showLoader: boolean;
  setLoaderValue: (showLoader: boolean) => void;
}

const LoaderContext = createContext<ILoaderContext>({
  showLoader: true,
  setLoaderValue: () => {},
});

export const useLoader = () => {
  const [showLoader, setLoaderValue] = useState(true);
  return {
    showLoader,
    setLoaderValue,
  };
};

export default LoaderContext;
