import React from "react";
import title from "../../img/titre.jpg";

const Header = () => {
  return (
    <div id="header">
      <div class="row">
        <div class="col-md-8">
          <img src={title} />
        </div>
        <div class="col-md-4"></div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div id="banner"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
