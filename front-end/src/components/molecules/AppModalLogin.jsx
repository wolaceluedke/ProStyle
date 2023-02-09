import * as React from "react";
import { useState } from 'react';
import axios from 'axios'

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




const LoginForm = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [emailInput, setEmailInput] = useState('')
  const [senhaInput, setPasswordInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'))

  
  
  const handleUserInputChange = (event) => setEmailInput(event.target.value)
  const handlePasswordInputChange = (event) => setPasswordInput(event.target.value)
  const handleLoginClick = (event) => {
    setLoading(true)
    axios.post('http://localhost:8000/user/login',
  {
    email: emailInput,
    senha: senhaInput,
  })
  .then(({ data }) => {
    console.log(data)
    if (data.token) {
      localStorage.setItem('token', data.token)
      setUsername(data.username)
      setLoggedIn(true)
    }
    setLoading(false)
  })
  .catch(error => {
    console.error(error)
    setLoading(false)
  })
  }
  
  


  // useState para verificar se ta logado ou não 

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
            <button variant="outline-dark" onClick={handleClose}>
            X
            </button>
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
                  value={emailInput}
                  onChange={handleUserInputChange}
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
                  value={senhaInput}
                  onChange={handlePasswordInputChange}
                />
                <label htmlFor="floatingPassword">Senha</label>
              </div>
              <button
                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                type="submit"
                onClick={handleLoginClick}
              >
                ENTRAR
              </button>
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

export default LoginForm
