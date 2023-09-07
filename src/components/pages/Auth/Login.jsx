import { useState, useContext } from "react";
import Input from "../../form/Input";

import styles from "../../form/Form.module.css";

import { Context } from "../../../context/UserContext";
import { Link } from "react-router-dom";
import Navbar2 from "../../layout/NavbarDeslogado";
import Message from "../../layout/Message";

function Login() {
  const [user, setUser] = useState({});
  const { login } = useContext(Context);

  function handleChange(e) {
    //spread operator, pega o objeto atual e vai substituindo com os dados enviados, pegando o nome da propriedade e adicionando o valor
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    //previnir que o formulario seja submetido quando submeter o envio
    e.preventDefault();
    login(user);
  }

  return (
    <>
      <Navbar2></Navbar2>
      <Message></Message>
      <section className={styles.form_container}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Input
            text="E-mail"
            type="email"
            name="email"
            placeholder="Digite o seu E-mail"
            handleOnChange={handleChange}
          />
          <Input
            text="Senha"
            type="password"
            name="password"
            placeholder="Digite a sua senha"
            handleOnChange={handleChange}
          />
          <input type="submit" value="Entrar" />
        </form>
        <p>
          Não tem conta?<Link to="/register">Clique aqui</Link>
        </p>
      </section>
    </>
  );
}

export default Login;
