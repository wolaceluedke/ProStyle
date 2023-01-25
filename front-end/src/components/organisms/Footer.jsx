import React from "react";
import LogoInstagram from "../atoms/IconeInstaFooter";
import IconeWhatsappFooter from "../atoms/IconeWhatsappFooter";
import CartoesPagamento from "../../imgs/FormaDePagamentos.png";

function Footer() {
  return (
    <div className="FooterStyle">
      <ul>
        <div className="AbaRedesSociais">
          <h5>Redes Sociais</h5>
          <li>
            <LogoInstagram />
          </li>
          <li>
            <IconeWhatsappFooter />
          </li>
          <li></li>
          <li></li>
        </div>
      </ul>
      <div>
        <h5>Fale Conosco</h5>
        <li>(47)0800 777 7000</li>
        <li>Email: Prostyle@gmail.com</li>
        <li>Endereço:</li>
        <li>Santa Catarina, XV de Novembro</li>
      </div>
      <div>
        <h5>Formas De Pagemento</h5>
        <img src={CartoesPagamento} alt="" />
      </div>
    </div>
  );
}

export default Footer;
