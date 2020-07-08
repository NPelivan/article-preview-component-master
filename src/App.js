import React from "react";
import "./App.css";
import Drawers from "./components/images/drawers.jpg";
import User from "./components/images/avatar-michelle.jpg";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";*/

function share(e) {
  return (
    <div>
      SHARE
      <a href="http://www.facebook.com">facebook</a>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <body className="container">
        <img src={Drawers} alt="drawers" />

        <h2>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>

        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>

        <img src={User} alt="User: Michelle" />

        <span>Michelle Appleton</span>
        <span>28 Jun 2020</span>

        <button onClick={this.share}>Share</button>
      </body>
    );
  }
}

export default App;
