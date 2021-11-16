import React, { useState } from "react";
import Layout from "../Core/Layout";
import { Inertia } from '@inertiajs/inertia';

const Login = () => {
  const [values, setValues] = useState({
    password: "",
    email: "",
  })

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    Inertia.post('/login', values)
  }

  const content = (
    <form onSubmit={handleSubmit}>
      <input type="email" id="email" name="email" value={values.email} onChange={handleChange} />
      <input type="password" id="password" name="password" value={values.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
  return (
    <Layout children={content}></Layout>
  );
};

export default Login;
