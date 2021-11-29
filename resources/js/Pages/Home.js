import React from "react";
import Layout from "../Core/Layout";
import { Head, usePage } from '@inertiajs/inertia-react'

const Home = () => {
  const { books } = usePage().props;
  return (
    <>
      <Head title="Accueil" />
      <h1>Home</h1>
      <ul>
      {books.map(({ id, title }) => (
        <li key={id}>
          { title }
        </li>
      ))}
      </ul>
    </>
  );
};

Home.layout = page => <Layout children={page} title="Welcome" />

export default Home;
