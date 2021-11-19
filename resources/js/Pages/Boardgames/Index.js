import React from "react";
import { usePage } from '@inertiajs/inertia-react';
import Layout from "../../Core/Layout";

const Index = () => {
  const { boardgames } = usePage().props;
  const content = (
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
  );
  return (
    <Layout children={content}></Layout>
  );
};

export default Index;
