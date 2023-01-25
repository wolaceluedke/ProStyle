import React from "react";
import AppNavbar from "../organisms/AppNavbar"
import Footer from "../organisms/Footer";

import Logo from "../../imgs/Logo ProStyle/09.jpeg"

export default function Cadastro() {
// // Adicionando um event listener de submit no formulário
// const registerForm = document.getElementById('register-form');
// registerForm.addEventListener('submit', async (event) => {
//   event.preventDefault(); // evita o comportamento padrão de submit

//   // Obtendo o valor dos campos de entrada
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   // Criando um objeto JSON com as informações do usuário
//   const userData = {
//     username: username,
//     password: password
//   };

//   // Enviando as informações para o back-end usando o método fetch()
//   try {
//     const response = await fetch('/register', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(userData)
//     });

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
            <input type="text" id="username" placeholder="escreva seu nome de usuário" className="form-control" />
            <span>Senha de usuário</span>
            <input type="password" id="password"  placeholder="escreva sua senha" className="form-control"  />
            <span>Confirme a sua Senha</span>
            </form>
            <input type="password" placeholder="escreva sua senha" className="form-control" />
            <span>Email</span>
            <input type="email" placeholder="email" className="form-control" />
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
        </div>
     </div>
        <Footer />
        </div>

  );
}