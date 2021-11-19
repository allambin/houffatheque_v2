import React from "react";
import { usePage, Head } from '@inertiajs/inertia-react';
import Layout from "../../Core/Layout";

const Index = () => {
  const { boardgames } = usePage().props;
  return (
    <>
      <Head title="Ludothèque" />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {boardgames.map(({ id, name, comment }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{comment}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

Index.layout = page => <Layout children={page} title="Ludothèque" />

export default Index;
