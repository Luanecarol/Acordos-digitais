import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom"
import { Login } from "../pages/Login";
//import { Home } from "../pages/Dashboard";
//import { Sidebar } from "../components/Sidebar/sidebar";

/*import { Pay } from "../components/Integracoes/Pay";
import { Planos } from "../components/Planos/planos";
import { Dashboard } from "../components/dashboard/dashboard";
import {Catalogo } from "../components/Catalogo/catalogo"
import {Cards } from '../components/Cards/cards'

import { Suport } from '../components/Suport/suport'
import { Dominios } from "../components/Dominios/dominios";

import {Certificado } from '../components/Certificado/certificado';
import { Cursos } from "../components/Cursos/cursos";

*/

export function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
       
        </Routes>
      </BrowserRouter>
    );
}