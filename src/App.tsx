import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import { Login } from './components/pages/Login/login';
import { Messages } from './components/pages/Messages/messages';
import Profile from './components/pages/Profile/profile';
import { Users } from './components/pages/Users/users';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='App-content'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/dialogs' element={<Messages />} />
          <Route path='/users' element={<Users />} />
          <Route path='/news' element={'News'} />
          <Route path='/settings' element={'settings'} />
          <Route path='/login' element={ <Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
