import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"

function ButtonSignUp() {
  return (
    <div className="cadastro-button">
      <Button variant="contained">
      <Link to="/cadastro" size="small">Cadastre-se </Link>
      </Button>
    </div>
  );
}

export default ButtonSignUp;
