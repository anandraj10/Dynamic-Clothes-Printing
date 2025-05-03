import React from 'react';
import { useState } from 'react';
import Home from "./component/pages/home/home"
import User from "./component/pages/Login/user/login"


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Home/>
      {/* <User/> */}
    </div>
  );
}

export default App;