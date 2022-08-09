import { Link } from 'react-router-dom';
import { Sidebar } from '../sidebar/sidebar';
import './catalogo.css';


export function Catalogo(){
return(
    
  <>
  <Sidebar />
  <div className='container1'>

  <h1 className='fw-bold' > Catálogo de Contrato</h1>
       

       <div className='mt-3'>
        <p className='fs-3'>Selecione Seu Modelo de Contrato</p>
        </div>

        <div class="col-sm-3 ">
  
    <select class="form-select border-success" id="specificSizeSelect">
      <option selected>Categoria</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>

 <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 ">

  <div className='col mt-3'>
  <div class="card shadow p-1" >
  <img src="https://canaldemarketingdigital.com.br/wp-content/uploads/2021/05/curso-googleads-canal-de-marketing-digital-800x445.png" class="card-img-top" height={260}  alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Google Ads</h5>

    <Link to="/new">
    <a href=" " class="btn btn-success">Criar</a>
    </Link>

    <Link to="/catalogo">
    <a href=" " class="ms-4 link-success">Visualizar<i class=" ms-2 fa-solid fa-arrow-right text-success"></i></a>
    </Link>
   
  </div>
</div>

  </div>

  

 

 </div>


       </div>
  </>



)
}