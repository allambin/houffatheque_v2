import React from "react";
import { Head } from '@inertiajs/inertia-react'
import Layout from "../Core/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMobileAlt, faEnvelope, faUser, faClock, faEuroSign } from '@fortawesome/free-solid-svg-icons'

const Info = () => {
  return (
    <>
      <Head title="Renseignements" />
      <h1>Renseignements</h1>
      <div className="row">
        <div className="col-md-6">
          <h3 className="title">Coordonnées générales</h3>
          <address className="adr">
            <p><FontAwesomeIcon icon={faMapMarkerAlt} className="fa-block" />
              Bibliothèque publique de Houffalize<br  />
              rue de Schaerbeek, 3/B <br />
              6660 HOUFFALIZE<br />
              Belgique
            </p>
            <p><FontAwesomeIcon icon={faMobileAlt} className="fa-block"  />Téléphone : 061/289855</p>
            <p><FontAwesomeIcon icon={faEnvelope} className="fa-block"  />jean.lambin[at]hotmail[dot]com</p>
          </address>
        </div>
        <div className="col-md-6">
          <h3 className="title">Bibliothécaires</h3>
          <p><FontAwesomeIcon icon={faUser} className="fa-block"  />Jean LAMBIN</p>
          <p><FontAwesomeIcon icon={faUser} className="fa-block"  />Marie-Henriette LATTEUR</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3 className="title">Horaires</h3>
          <span className="block"><FontAwesomeIcon icon={faClock} className="fa-block"  />Lundi de 17 h à 18 h 30</span>
          <span className="block"><FontAwesomeIcon icon={faClock} className="fa-block"  />Mardi de 15 h 30 à 17 h</span>
          <span className="block"><FontAwesomeIcon icon={faClock} className="fa-block"  />Samedi de 10 h à 12 h</span>
        </div>
        <div className="col-md-6">
          <h3 className="title">Tarifs</h3>
          <span className="block"><FontAwesomeIcon icon={faEuroSign} className="fa-block"  />25 cts pour le prêt d'un livre pour 15 jours</span>
          <span className="block"><FontAwesomeIcon icon={faEuroSign} className="fa-block"  />50 cts pour le prêt d'un jeu pour 15 jours</span>
          <span className="block"><FontAwesomeIcon icon={faEuroSign} className="fa-block"  />Le prêt des livres est gratuit pour les enfants, adolescents et étudiants.</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3 className="title">Où nous trouver ?</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5115.265688061791!2d5.789982!3d50.130592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c013fa175fc3ff%3A0x409dd8ec71d5e994!2sRue+de+Schaerbeek+3%2C+6660+Houffalize%2C+Belgique!5e0!3m2!1sfr!2sbe!4v1428305584846" width="800" height="200" frameBorder="0" style={{border:0}}></iframe>
        </div>
      </div>
    </>
  );
};

Info.layout = page => <Layout children={page} title="Renseignements" />

export default Info;
