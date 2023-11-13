import './App.css';
import Login from './components/LoginSignup/Login'; // Use "Login" for import
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './components/MainPage/Main';
import UsuariosPage from './components/UsuariosPage/Usuarios';
import AtalhosPage from './components/AtalhosPage/AtalhosPage';
import Teste from './components/TESTE/Teste';
import FormularioAtalho from './components/FormularioAtalho/FormularioAtalho';
import EditarAtalho from './components/EditarAtalho/EditarAtalho';
import DeleteAtalho from './components/DeleteAtalho/DeleteAtalho';
import CriarUsuario from './components/CriarUsuario/CriarUsuario'
import DeleteUsuario from './components/DeleteUsuario/DeleteUsuario';
import EditarUsuario from './components/EditarUsuario/EditarUsuario';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Main' element={<Main/>} />
          <Route path='/Admin' element={<UsuariosPage/>} />
          <Route path='/AddUsuarios' element={<UsuariosPage />} />
          <Route path='/AddAtalhos' element={<AtalhosPage/>} />
          <Route path='/Teste' element={<Teste/>} />
          <Route path='/atalhos/create' element={<FormularioAtalho/>} />
          <Route path='/atalhos/edit/:id' element={<EditarAtalho/>} />
          <Route path='/atalhos/delete/:id' element={<DeleteAtalho />} />
          <Route path='/usuarios/create/' element={<CriarUsuario />} />
          <Route path='/usuarios/delete/:id' element={<DeleteUsuario />} />
          <Route path='/usuarios/Edit/:id' element={<EditarUsuario />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
