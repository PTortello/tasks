import { createContext, useState } from 'react';

interface IIsSignedContext {
  isSigned: boolean;
  setIsSigned: (showLoader: boolean) => void;
}

const isSignedContext = createContext<IIsSignedContext>({
  isSigned: false,
  setIsSigned: () => {},
});

export const useIsSigned = () => {
  const [isSigned, setIsSigned] = useState(false);
  return {
    isSigned,
    setIsSigned,
  };
};

export default isSignedContext;
