import React, { useSelector, useDispatch } from 'react-redux';

import { increment,decrement } from '../toolkit/valueReducer';

const Usage = () => {
  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(value);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Usage;
