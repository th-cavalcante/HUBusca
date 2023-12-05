// /src/App.tsx
import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Home from '../pages/Home'



import Logo from './img/logomarca.png';
import '../src/styles/style.css';

const App: React.FC = () => {

  return (
    <>
      <GlobalStyles />
      <div className='container-logo'><img src={Logo} alt="logo" /></div>
  
      < Home />
      
    </>
  );
};

export default App;
