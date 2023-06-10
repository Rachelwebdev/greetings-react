import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getGreetings } from './redux/greetingsSlice';
import Greetings from './components/Greeting';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Greetings />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
