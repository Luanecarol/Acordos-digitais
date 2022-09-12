
import { Sidebar } from '../sidebar/sidebar';
import './NovoContrato.css';
import link from './link.png';



export function NovoContrato () {
    return (
        <>
        <Sidebar />
        <div className='box1'>
        
       

           <div className=' div-form mt-3'>
            <h5>Contrato para Lançamento Digital</h5>

    <form class="row mt-3 mb-2">
        <h5>Dados Da Agência</h5>

<div class="col-6 ">

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

                <h5 class="mt-3">Dados do Contratante</h5>


  
    <select class="form-select border-success " id="specificSizeSelect">
      <option selected>Selecione o Tipo de Pessoa</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <h5 class="mt-3">Cláusulas do contrato</h5>


<input type="text" 
       placeholder="Valor de Quantos R$0,00"
       class=" border-success "/>

<a href=" ">Criar Novas Cláusulas</a>

     
   
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

