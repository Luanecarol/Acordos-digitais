import React, { useState } from 'react';
import './login.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";



export function Login() {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [show,setShow] = useState(false)

const handleClick = (e) => {
  e.preventDefault()
  setShow(!show);
}


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
          <input type="email" 
          class="form-control " 
          id="floatingInput" 
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
         
        </div>
        <div class="eye">
          <input  
          class="form-control" 
          id="floatingPassword" 
          placeholder="Senha"
          type={show ? "text" : "password"}
          value={password}
          onChange={e => setPassword(e.target.value)}
          />
      <div className="login-eye">
                  {show ? (
                     <AiOutlineEye
                        size={20}
                        onClick={handleClick}
                     />
                  ) : (
                        <AiOutlineEyeInvisible
                           size={20}
                           onClick={handleClick}
                        />
                     )}
               </div>

        </div>

        <div class=" mb-3">
          <label className='text-white fs-5 '>
            <input  type="checkbox"  value="remember-me" /> Permanecer conectado
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
