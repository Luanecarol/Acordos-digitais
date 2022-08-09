import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { Login } from "../pages/Login";
import { Contratos } from "../components/contratos/contratos";

//import { Home } from "../pages/Dashboard";
import { Pay } from "../components/integracoes/pay";
import { Planos } from "../components/planos/planos";
//import { Sidebar } from "../components/Sidebar/sidebar";
import { Dashboard } from "../components/dashboard/dashboard";
import { Catalogo } from "../components/catalogo/catalogo"
//import {Cards } from '../components/Cards/cards'

//import { Suport } from '../components/Suport/suport'
//import { Dominios } from "../components/Dominios/dominios";

//import {Certificado } from '../components/Certificado/certificado';
//import { Cursos } from "../components/Cursos/cursos";



export function Rotas(){
  return(
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="planos" element={<Planos />} />
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="contratos" element={<Contratos />} />


       
        
        <Route path="integracao" element={<Pay /> } />
        
      
      </Routes>
    </BrowserRouter>
  );
}