import { useState, useCallback } from 'react';

const useToggle = (initialState) => {
  const [open, setToggle] = useState(initialState);

  const handleOnClick = useCallback((flag) => {
    setToggle(flag);
  }, []);

  return [open, handleOnClick];
};

export default useToggle;
