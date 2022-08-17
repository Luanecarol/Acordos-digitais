import { Sidebar } from '../sidebar/sidebar';
import './papelTimbrado.css';
import link from './link.png';


export function Papel (){
return(
    
  <>
  <Sidebar />
  <div className='container1'>

  <h1 className='fw-bold' > Papel Timbrado </h1>
       

       <div className='mt-3'>
        <p className='fs-3'> Personalize Seu Contrato</p>
        </div>

       

 <div class=" anexo ">

 <img className='imglink' src={link} alt="..." height= {200}/>
  

 

 </div>


       </div>
  </>



)
}