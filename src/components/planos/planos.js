import React from 'react';
import './planos.css';
import { Sidebar } from '../sidebar/sidebar';

export function Planos () {
    return (
        <>
        <Sidebar />
        <div className='container1'>
        
           <h1 className='fw-bold'>Planos</h1>
            <p className='fs-3'>Feche mais serviços de marketing e deixe a burocracia com a gente</p>

           <section class="pricing aa">
  <div class="">
    <div class="row">
     
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title  text-uppercase text-center">Plano Lite</h5>
            <h6 class="card-price text-center">R$49<span class="period">/mês</span></h6>
          
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>10 contratos por mês</li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Papel Timbrado Personalizado </li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Assinatura Digital</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Suporte por chat</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Domínio Personalizado</li>
         
            </ul>
            <div class="d-grid">
              <a href=" " class="btn btn-outline-success text-uppercase">Quero esse</a>
            </div>
          </div>
        </div>
      </div>
     
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
          
            <h5 class="card-title  text-uppercase text-center">Plano Starter</h5>
            <h6 class="card-price text-center">R$99<span class="period">/mês</span></h6>
          
        
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Contratos Ilimitados</li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Papel Timbrado Personalizado </li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Assinatura Digital</li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Suporte por chat</li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Domínio personalizado</li>
            
            </ul>
            <div class="d-grid">
              <a href=" " class="btn btn-success text-uppercase">Quero esse</a>
            </div>
          </div>
        </div>
      </div>
    
      
    </div>
  </div>
</section>


        </div>
        </>
    )
}