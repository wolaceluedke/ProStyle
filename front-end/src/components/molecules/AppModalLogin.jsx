import * as React from "react";
import { useState } from 'react';

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CloseButton from "../atoms/CloseButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};




export default function BasicModal() {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // function LoginPage() {
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [errorMessage, setErrorMessage] = useState ('');
  // }
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const data = { username, password };

  //   try {
  //     const response = await fetch('https://seu-backend.com/login', {
  //       method: 'POST',
  //       body: JSON.stringify(data),
  //       headers: { 'Content-Type': 'application/json' },
  //     });

  //     if (!response.ok) {
  //       throw new Error(response.statusText);
  //     }

  //     const { token } = await response.json();

  //     localStorage.setItem('token', token);
  //     window.location.href = '/protected';
  //   } catch (error) {
  //     setErrorMessage(error.message);
  //   }
  // };
  
  
  return (
    <div>
      <div className="enter-button border-radius">
        <Button
          onClick={handleOpen}
          className="text-color-titles"
          variant="contained"
        >
          Entrar
        </Button>
      </div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="border-radius">
          <div className="X">
            <Button variant="outline-dark" onClick={handleClose}>
              <CloseButton />
            </Button>
          </div>
          <h1
            id="modal-modal-title"
            className="align-items-center"
            variant="h6"
            component="h2"
          >
            Identifique-se
          </h1>
          <div className="modal-body p-5 pt-0">
            <form className="" >
              <div className="form-floating mb-3">
                <input
                  type="text"
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
                  className="form-control rounded-3"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Usuário</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  placeholder="Senha"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Senha</label>
              </div>
              <button
                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                type="submit"
              >
                ENTRAR
              </button>
              {/* {errorMessage && <p>{errorMessage}</p>} */}
              <small className="text-muted">
                Ao clicar em ENTRAR estará aceitando os Termos de uso.
              </small>
            </form>
          </div>
          
        </Box>
      </Modal>
    </div>
  )
};
