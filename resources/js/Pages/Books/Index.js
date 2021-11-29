import React from "react";
import { usePage, Head } from '@inertiajs/inertia-react';
import Layout from "../../Core/Layout";

const Index = () => {
  const { books, collections } = usePage().props;
  return (
    <>
      <Head title="Bibliothèque" />
      <ul>
      {collections.map(({ id, name }) => (
        <li key={id}>
          { name }
        </li>
      ))}
      </ul>
      <table>
        <thead>
          <tr>
            <th>Auteur</th>
            <th>Titre</th>
            <th>Editeur</th>
            <th>Collection</th>
            <th>Année</th>
          </tr>
        </thead>
        <tbody>
          {books.map(({ id, title, year, publisher, collection, authors }) => (
          <tr key={id}>
            <td>
            {authors.map(author => <div key={author.id}>{author.name}</div>)}
            </td>
            <td>{title}</td>
            <td>
              {publisher ? publisher.name : 'n/a'}
            </td>
            <td>
              {collection ? collection.name : 'n/a'}
            </td>
            <td>{year}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

Index.layout = page => <Layout children={page} title="Bibliothèque" />

export default Index;
