import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"

function ButtonSignUp() {
  return (
    <div className="enter-button border-radius">
      <Button variant="contained" className="buttonCadastro">
      <Link to="/cadastro" size="small">Cadastro </Link>
      </Button>
    </div>
  );
}

export default ButtonSignUp;
