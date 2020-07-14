import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-solid-svg-icons";

export default class Toggle extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    return (
      <div className="button_style">
        {this.state.on && (
          <div className="onclick">
            <span>SHARE</span>

            <a href="http://www.facebook.com" target="_blank">
              Facebook
            </a>

            <a href="http://www.twitter.com" target="_blank">
              Twitter
            </a>
            <a href="http://wwwt.pinterest.com" target="_blank">
              Pinterest
            </a>
          </div>
        )}
        <button onClick={this.toggle}>Share</button>
      </div>
    );
  }
}
