import './App.css';
import Login from './components/LoginSignup/Login'; // Use "Login" for import
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './components/MainPage/Main';
import OldMain from './components/OldMainPage/OldMain';
import AdminPage from './components/AdminPageC/AdminPage'
import UsuariosPage from './components/UsuariosPage/Usuarios';
import AtalhosPage from './components/AtalhosPage/Atalhos';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Main' element={<Main/>} />
          <Route path='/OldMain' element={<OldMain/>} />
          <Route path='/Admin' element={<AdminPage/>} />
          <Route path='/usuarios' element={<UsuariosPage />} />
          <Route path='/atalhos' element={<AtalhosPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
