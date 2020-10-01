import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

//let element;
//***************** */
// let coin = {
//   glava:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZ3vRLGpvg1Rkixsq4kuDOEZFAG8_E_I8e8w&usqp=CAU",
//   pismo: "./pismo.jpeg",
// };

// let random = Math.floor(Math.random() * 2);

// if (random === 0) {
//   element = <img src={coin.pismo} alt="pismo" />;
// } else {
//   element = <img src={coin.glava} alt="glava" />;
// }
//******************** */
//if (test > godine) {
//element = <h1>Punoletni ste!</h1>;
//} else {
//element = <h1>Niste punoletni!</h1>;
//}

//************************ */
// const age = 21;
// let myAge = 30;

// element = (
//   <h1>{myAge >= age ? "Alkohol je dozvoljen" : "Alkohol nije dozvoljen"}</h1>
// );
//*********************** */

// const novcic = "pismo";

// element = (
//   <ul>
//     {novcic === "glava" && <li>Macka</li>}
//     <li key="li-o1">Pas</li>
//     <li key="li-o2">Sova</li>
//   </ul>
// );

//*************** */

// const people = ["Milica", "Jelena", "Nemanja"];
// const peopleList = people.map((item, index) => (
//   <li key={"person" + index}>{item}</li>
// ));
// const myPeople = <ul>{peopleList}</ul>;
// const owl = {
//   title: "Sova",
// };

// class MyComponent extends Component {
//   //FUNKCIJE SE PISU OVDE IZNAD RENDER
//   myFunction() {
//     alert("Kliknuto");
//   }
//   render() {
//     //PROMENLJIVE ISPOD RENDER
//     const n = Math.floor(Math.random() * 10 + 1);
//     return (
//       <div>
//         <button onClick={this.myFunction}>Klik</button>
//         <p>Broj je {n}</p>
//         <h1>Hello world!</h1>
//         <p>{owl.title}</p>
//       </div>
//     );
//   }
// }

ReactDOM.render(<App />, document.getElementById("root"));
