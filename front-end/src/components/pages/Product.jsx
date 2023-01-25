import React from "react";
import InputProdutos from "../atoms/InputProdutos";
import AppNavbar from "../organisms/AppNavbar";
import AppTextProduct from "../molecules/AppTextProduct";
import CamisetaSantaCruz from "../../imgs/camisa santacruz.png.png";

export default function Product() {
  return (
    <div>
      <div>
        <AppNavbar />
      </div>

      <div className="informações-pag-produto">
        <img
          src={CamisetaSantaCruz}
          alt="Camiseta Santa Cruz"
          className="card"
        />
        <AppTextProduct />
        <InputProdutos />
      </div>
    </div>
  );
}
