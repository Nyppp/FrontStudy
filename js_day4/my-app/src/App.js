import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MyPage from './MyPage';
import CreateAccount from './CreateAccount';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' 
        element={
          isLoggedIn ? <MyPage /> : <CreateAccount setIsLoggedIn={setIsLoggedIn}/>
          }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
