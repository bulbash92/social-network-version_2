import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import { Messages } from './components/pages/Messages/messages';
import Profile from './components/pages/Profile/profile';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='App-content'>
      <Navbar/>
      <Routes>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/dialogs' element={<Messages/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
