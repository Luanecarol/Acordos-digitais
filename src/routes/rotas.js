import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { Login } from "../pages/Login";
import { Contratos } from "../components/contratos/contratos";
import { Pay } from "../components/integracoes/pay";
import { Planos } from "../components/planos/planos";
//import { Sidebar } from "../components/Sidebar/sidebar";
import { Dashboard } from "../components/dashboard/dashboard";
import { Catalogo } from "../components/catalogo/catalogo";
import { Papel } from '../components/papelTimbrado/papelTimbrado';
import { NovoContrato } from '../components/NovoContrato/NovoContrato';





export function Rotas(){
  return(
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="planos" element={<Planos />} />
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="contratos" element={<Contratos />} />
        <Route path="papelTimbrado" element={<Papel />} />
        <Route path="NovoContrato" element={<NovoContrato />} />


       
        
        <Route path="integracao" element={<Pay /> } />
        
      
      </Routes>
    </BrowserRouter>
  );
}