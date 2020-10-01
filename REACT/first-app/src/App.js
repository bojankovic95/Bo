import React, { Component } from "react";
import NavBar from "./NavBar";
import ProfilPage from "./ProfilePage";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hello!",
      niz: ["proba", "dva"],
      test: false,
      broj: 2,
      color: "red",
    };
  }
  handleEvent = () => {
    this.setState({ title: "Dobrodosli" });
  };

  handleChangeColor = () => {
    this.setState({ color: "green" });
  };
  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>{this.state.title}</h1>
        <button onClick={this.handleChangeColor}>Click</button>
      </div>
    );
  }
}
export default App;
