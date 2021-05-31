import React from 'react';
import './App.css';
import ButtonAppBar from './components/AppBar/ButtonAppBar';


const App = ({ children }) => (
  <>

    <ButtonAppBar/>
    {children}
    <div className="container"></div>

  </>

);


export default App;
