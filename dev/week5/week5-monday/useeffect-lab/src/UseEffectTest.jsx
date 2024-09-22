import React, { useState, useEffect } from 'react';

const [count, setCount] = useState(0);

const UseEffectTest = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);

  useEffect(() => {
    console.log('UseEffect1 Ran');
  }, []);
  useEffect(() => {
    console.log('UseEffect2 Ran');
    if (toggleTwo)
      console.log('toggleTwo slice of state is true so this code runs');
  }, [toggleTwo]);

  return (
    <div>
      {console.log('rendered or re-rendered')}
      <h1>UseEffectTest Component</h1>
      <button onClick={() => setToggleOne(!toggleOne)}>
        Toggle: {toggleOne ? 'True' : 'False'}
      </button>
      <button onClick={() => setToggleOne(!toggleTwo)}>toggleTwo</button>
    </div>
  );
};

export default UseEffectTest;
