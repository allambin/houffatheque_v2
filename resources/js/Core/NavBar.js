import React from "react";

const NavBar = () => {
  return (
    <nav id="w0" class="navbar navbar-expand-lg navbar-light bg-light" role="navigation">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="/">Accueil</a></li>
            <li class="nav-item"><a class="nav-link" href="/renseignements">Renseignements</a></li>
            <li class="nav-item"><a class="nav-link" href="/bibliotheque">Bibliothèque</a></li>
            <li class="nav-item"><a class="nav-link" href="/ludotheque">Ludothèque</a></li>
            <li class="nav-item"><a class="nav-link" href="/evenements">Evénements</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
