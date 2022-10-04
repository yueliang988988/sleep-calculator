import React, {useEffect, useRef} from 'react';

const usePrevious = (value:any) => {
  const ref = useRef<any>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
export default usePrevious;


// code from: https://blog.logrocket.com/accessing-previous-props-state-react-hooks/
