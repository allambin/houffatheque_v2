import React, { useState } from "react";
import { Head, usePage } from '@inertiajs/inertia-react';
import Layout from "../../Core/Layout";
import { Inertia } from '@inertiajs/inertia';

const Index = () => {
  const { errors, boardgame } = usePage().props;
  const [values, setValues] = useState({
    id: boardgame.id,
    name: boardgame.name,
    comment: boardgame.comment,
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
    Inertia.put(`/ludotheque/${values.id}`, values)
  }
  return (
    <>
      <Head title="Ludothèque - Modifier" />
      <div className="error">
        {errors.name ? errors.name : ''}
        {errors.comment ? errors.comment : ''}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" name="name" value={values.name} onChange={handleChange} />
        <textarea type="text" id="comment" name="comment" value={values.comment} onChange={handleChange}></textarea>
        <button type="submit">Modifier</button>
      </form>
    </>
  );
};

Index.layout = page => <Layout children={page} title="Ludothèque - Modifier" />

export default Index;
