import React from "react";
import { Link } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react';


const NavBar = () => {
  const { url, component } = usePage();
  return (
    <nav id="w0" className="navbar navbar-expand-lg navbar-light bg-light" role="navigation">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/">Accueil</Link>
            </li>
            <li className={component === 'Info' ? 'active nav-item' : 'nav-item'}>
              <Link href="/renseignements" className="nav-link">Renseignements</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/bibliotheque">Bibliothèque</Link>
            </li>
            <li className={component === 'Boardgames/Index' ? 'active nav-item' : 'nav-item'}>
              <Link className="nav-link" href="/ludotheque">Ludothèque</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/evenements">Evénements</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
