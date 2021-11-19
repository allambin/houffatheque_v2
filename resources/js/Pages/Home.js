import React from "react";
import Layout from "../Core/Layout";
import { Head } from '@inertiajs/inertia-react'

const Home = () => {
  return (
    <>
      <Head title="Accueil" />
      <h1>Home</h1>
    </>
  );
};

Home.layout = page => <Layout children={page} title="Welcome" />

export default Home;
