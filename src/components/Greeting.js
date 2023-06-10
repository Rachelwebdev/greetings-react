import React from 'react';
import { useSelector } from 'react-redux';

const Greetings = () => {
  const greetings = useSelector((state) => state.greeting.greetings);

  return (
    <>
      <div>
        <h1>Random Greeting: </h1>
        <p>{greetings.message}</p>
      </div>
    </>
  );
};

export default Greetings;
