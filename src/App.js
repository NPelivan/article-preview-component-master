import React from "react";
import "./App.css";
import Drawers from "./components/images/drawers.jpg";
import User from "./components/images/avatar-michelle.jpg";
import Toggle from "./components/Toggle";

class App extends React.Component {
  render() {
    return (
      <>
        <body className="container">
          <img src={Drawers} alt="drawers" className="main_image" />
          <section>
            <h2>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h2>

            <p>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>

            <div className="user_container">
              <img src={User} alt="User: Michelle" className="user_image" />

              <div className="block_item">
                <span className="user_name">Michelle Appleton</span>
                <span>28 Jun 2020</span>
              </div>
            </div>
            <Toggle />
          </section>
        </body>
      </>
    );
  }
}

export default App;
