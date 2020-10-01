import React, { Component } from "react";
class ProfilPage extends Component {
  state = {};
  render() {
    if (this.props.title === "Moja profil stranica!") {
      return <button onClick={this.props.mojaFunkcija}>Btn</button>;
    } else {
      return <h1>{this.props.movies[1]}</h1>;
    }
  }
}
ProfilPage.defaultProps = { title: "Hello" };
export default ProfilPage;
