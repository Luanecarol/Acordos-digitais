import './login.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';




export function Login() {
  return (
<div className=" body ">
    <main class="form-signin w-100 m-auto mt-5">
      <form >
        <div class="title"> <img class="mb-4 mx-2" src={logo} alt="" />
         <h4>ACORDOSDIGITAIS</h4></div>
        
 
        <div className=''>
        <h1 class="h3 mb-3 text-center fw-normal text-white fs-3 ">Crie seus contratos de marketing de forma personalizada e com segurança jurídica em apenas um clique</h1>
        </div>

        <div class=" mb-3 ">
          <input type="email" class="form-control " id="floatingInput" placeholder="E-mail"/>
         
        </div>
        <div class="">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Senha"/>
         
        </div>

        <div class=" mb-3">
          <label className='text-white fs-5 '>
            <input className="check" type="checkbox" value="remember-me" /> Permanecer conectado
            <a href=" " className='ps-5 link-success '>Esqueci a Senha</a>
          </label>
          
        </div>

        
        
        <Link to="dashboard">
        <button class="w-100 btn btn-lg btn-success mb-3" type="submit">Entrar</button>
        </Link>
        <button class="w-100 btn btn-lg btn-outline-secondary" type="submit">Fazer cadastro</button>
      
      </form>
    </main>
</div>
    
  );
}