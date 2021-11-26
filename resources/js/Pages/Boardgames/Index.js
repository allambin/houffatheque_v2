import React from "react";
import { usePage, Head, Link } from '@inertiajs/inertia-react';
import Layout from "../../Core/Layout";

const Index = () => {
  const { boardgames, auth } = usePage().props;
  console.log(auth);
  return (
    <>
      <Head title="Ludothèque" />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Comment</th>
            { auth.user ? (<th>Actions</th>) : null }
          </tr>
        </thead>
        <tbody>
          {boardgames.map(({ id, name, comment }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{comment}</td>
            { auth.user ? (<td><Link href={`ludotheque/${id}/edit`} className="nav-link">Modifier</Link></td>) : null }
          </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

Index.layout = page => <Layout children={page} title="Ludothèque" />

export default Index;
