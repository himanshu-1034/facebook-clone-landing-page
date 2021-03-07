
import { useState } from 'react';
import './App.css';
import { useStateValue } from './contextProvider';
import Feed from './Feed';
import Header from './header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';


function App() {
  const [{user},dispatch] = useStateValue();
  

  return (
    <div className="app">
      {!user ? <Login/> : <>
        <Header/>
      <div className="app_body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
      </>}
    </div>
  );
}

export default App;
