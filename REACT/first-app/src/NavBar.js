import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const pages = ["home", "blog", "shop", "kontakt"];
    const navLinks = pages.map((page, index) => {
      return (
        <a key={index} href={"/" + page}>
          {page}
        </a>
      );
    });
    return <nav>{navLinks}</nav>;
  }
}

export default NavBar;
