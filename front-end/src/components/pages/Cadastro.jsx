import React from "react";
import AppNavbar from "../organisms/AppNavbar"
import Footer from "../organisms/Footer";
import axios from 'axios'
import { useState } from 'react';

import Logo from "../../imgs/Logo ProStyle/09.jpeg"

export default function Cadastro() {
   const [emailInput, setEmailInput] = useState('')
   const [senhaInput, setPasswordInput] = useState('')
   const [nomeInput, setNomeInput] = useState('')
   const [loading, setLoading] = useState(false)
 
   const handleEmailInputChange = (event) => setEmailInput(event.target.value)
   const handlePasswordInputChange = (event) => setPasswordInput(event.target.value)
   const handleNomeInputChange = (event) => setNomeInput(event.target.value)
   

const handleSignUpClick = () => {
   setLoading(true)
   axios.post('http://localhost:8000/user/cadastro',
     {
       email: emailInput,
       senha: senhaInput,
       nome: nomeInput,
     })
    
     .then(({ data }) => {
       console.log(data)
      
     })
 };
//     if (response.ok) {
//       alert('Cadastro realizado com sucesso!');
//     } else {
//       throw new Error('Algo deu errado no cadastro. Tente novamente mais tarde.');
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

  return (
    
    
     <div>
        <AppNavbar />
        
        <div className="Cadastro">
            <img src={Logo} alt="" className="logoCadastro" />
            <h1>Cadastre-se</h1>
            <div className="row g-3 inputsCadastro">
            <span className="">Faça o cadastro para ficar por dentro de tudo e comprar com mais agilidade nas proximas vezes!</span>
            <span>Nome de usuário</span>
            <form id="register-form">
            <input value={nomeInput} onChange={handleNomeInputChange} type="text" id="username" placeholder="escreva seu nome de usuário" className="form-control" />
            <span>Senha de usuário</span>
            <input value={senhaInput} onChange={handlePasswordInputChange} type="password" id="password"  placeholder="escreva sua senha" className="form-control"  />
            <span>Confirme a sua Senha</span>
            <input type="password" placeholder="escreva sua senha" className="form-control" />
            <span>Email</span>
            <input value={emailInput} onChange={handleEmailInputChange} type="email" placeholder="email" className="form-control" />
            </form>
            <span>Cep</span>
            <input type="text" placeholder="Escreva seu CEP" className="form-control" />
            <span>Cidade</span>
            <input type="text" placeholder="Nome de seu cidade" className="form-control" />
            <span>Bairro</span>
            <input type="text" placeholder="Nome de seu bairro" className="form-control" />
            <span>Endereço</span>
            <input type="text" placeholder="Nome de seu endereço" id="txtEndereco" className="form-control"/>
            <span>Número Residencial</span>
            <input type="text" placeholder="Número de sua residência" className="form-control"/>
            <button onClick={handleSignUpClick}>Cadastre-se</button>
        </div>
     </div>
        <Footer />
        </div>

  );
}