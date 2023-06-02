import Login from './components/login/Login';
import Cadastro from './components/cadastro/Cadastro';
import Habitos from './components/habitos/Habitos';
import HeaderFooter from './components/headerFooter/HeaderFooter';
import Hoje from './components/hoje/Hoje';
import Historico from './components/historico/Historico';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contexto from './Contexto/Contexto';
import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [token, setToken]=useState('teste');
  const [diasHabito, setDiasHabito] = useState([]);

  //axios.defaults.headers.common['Authorization'] = token;
  //console.log('este é o TOKEN!!!', token);
  


  return (
    <>
      <Contexto.Provider value={{token, setToken, diasHabito, setDiasHabito}}>
        <BrowserRouter>

          <HeaderFooter />

          <Routes>

            <Route path={'/'} element={<Login />} ></Route>
            <Route path={'/cadastro'} element={<Cadastro />} ></Route>
            <Route path={'/habitos'} element={<Habitos />} ></Route>
            <Route path={'/hoje'} element={<Hoje />} ></Route>
            <Route path={'/historico'} element={<Historico />} ></Route>

          </Routes>


        </BrowserRouter>
      </Contexto.Provider>
    </>
  )
}


