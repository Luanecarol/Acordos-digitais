
import { Sidebar } from '../sidebar/sidebar';
import './NovoContrato.css';
import link from './link.png';



export function NovoContrato () {
    return (
        <>
        <Sidebar />
        <div className='container1'>
        
       

           <div className=' div-form mt-3'>
            <h5>Contrato para lançamento digital</h5>

    <form class="row mt-3 mb-2">
        <h5>dados da agência</h5>

<div class="col-3 ">

<input type="text" 
       placeholder="Razão social"
       class=" border-success "/>

<input type="text" 
       placeholder="CNPJ"
       class=" border-success "/>
       
<input type="text" 
          placeholder="nome do representante legal da agência"
          class=" border-success "/>

<input type="text" 
             placeholder="endereço da agência"
             class=" border-success "/>


<input type="cpf" 
                placeholder="CPF do representante legal"
                class=" border-success "/>

    <input type="text" 
                   placeholder="endereço do representante legal"
                   class=" border-success "/>

                <h5>Dados do Contratante</h5>


  
    <select class="form-select border-success " id="specificSizeSelect">
      <option selected>Selecione o Tipo de Pessoa</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>

  

  
</form>


     
     </div>
     <div className='anexo'>

     <img className='imglink' src={link} alt="..." height= {200}/>

     </div>


</div>

       
        </>
 

    );

}

