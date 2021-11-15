import React from "react";
import title from "../../img/titre.jpg";

const Header = () => {
  return (
    <div id="header">
      <div className="row">
        <div className="col-md-8">
          <img src={title} />
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div id="banner"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
