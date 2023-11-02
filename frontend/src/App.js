import './App.css';
import Login from './components/LoginSignup/Login'; // Use "Login" for import
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './components/MainPage/Main';
import AdminPage from './components/AdminPageC/AdminPage'
import UsuariosPage from './components/UsuariosPage/Usuarios';
import AtalhosPage from './components/AtalhosPage/AtalhosPage';
import Teste from './components/TESTE/Teste';
import FormularioAtalho from './components/FormularioAtalho/FormularioAtalho';
import EditarAtalho from './components/EditarAtalho/EditarAtalho';
import DeleteAtalho from './components/DeleteAtalho/DeleteAtalho';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Main' element={<Main/>} />
          <Route path='/Admin' element={<AdminPage/>} />
          <Route path='/AddUsuarios' element={<UsuariosPage />} />
          <Route path='/AddAtalhos' element={<AtalhosPage/>} />
          <Route path='/Teste' element={<Teste/>} />
          <Route path='/atalhos/create' element={<FormularioAtalho/>} />
          <Route path='/atalhos/edit/:id' element={<EditarAtalho/>} />
          <Route path='/atalhos/delete/:id' element={<DeleteAtalho />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
