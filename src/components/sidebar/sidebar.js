import './sidebar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';



export function Sidebar() {

  function ativar() {
    document.getElementById('elemento',);

    document.getElementById('elemento').classList.toggle('bar'); 

}

  return (
    <main  className='space-toggle'>
        <header className='header space-toggle'>
          <div className='header-toggle'>
           <i className="fas fa-bars"></i>
          </div>
        </header>
         
        <aside className='sidebar show'>
          <nav className='nav'>
            <div>
              <div  className='mx-2 fs-6 text-white'> 
              <img class="w-5 mx-1" src={logo} alt="" />ACORDOS DIGITAIS
              </div>
              
              <div className=' m-4 text-white '>
          
            <Link to="/dashboard">
            <div  className='mt-3 nav-link1'> 
              <span className='mx-2 text-primary'>DASHBOARD</span>
              </div>
            </Link>
           

                <Link to="/planos">
                <div  className='mt-3 nav-link1'> 
              <i className="fa-solid fa-play nav-link-icon"></i> 
              <span className='mx-2 fs-5 text-primary'>PLANOS</span>
              </div>
                </Link>
      

              <Link to="/catalogo">
              <div className='mt-3 nav-link1'> 
              <i className="fa-solid fa-building-columns nav-link-icon"></i> 
              <span className='mx-2 fs-5 text-primary'>CATÁLOGO DE CONTRATO</span>
              </div>
              </Link>
        

              <Link to="/catalogo">
            <div  className='mt-3 nav-link1' onClick={ativar}> 
              <i className="fa-solid fa-graduation-cap nav-link-icon "></i> 
              <span className='mx-2 fs-5 text-primary'>PAPEL TIMBRADO</span>             
              </div>
              </Link>

              <Link to="/contratos">
              <div  className='mt-3 nav-link1' onClick={ativar}> 
              <i className="fa-solid fa-graduation-cap nav-link-icon "></i> 
              <span className='mx-2 fs-5 text-primary'>SEUS CONTRATOS</span>             
              </div>
              </Link>
           

            

          

  
            

              
              </div>
            </div>

            <div  className='mb-3 text-white mx-2  '> 
              <div className='nav-link1'>
              <i className="fa-solid fa-gear nav-link-icon"></i> 
              <span className='mx-2 fs-5'>CONFIGURAÇÕES </span> 
              </div>

              
              <Link to="/">
              <div className='nav-link1'>
              <i className="fa-solid fa-arrow-right-from-bracket nav-link-icon2"></i> 
              <span className='mx-2 fs-5 text-danger'>Sair </span> 
              </div>
              </Link>      
              
              </div>
              
              

          </nav>
        </aside>
      </main>
  );
};
