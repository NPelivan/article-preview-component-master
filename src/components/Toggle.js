import React, { Component } from "react";

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
            <span className="share-text">SHARE</span>

            <a className="link" href="http://www.facebook.com" target="_blank">
              Facebook
            </a>

            <a className="link" href="http://www.twitter.com" target="_blank">
              Twitter
            </a>

            <a className="link" href="http://www.pinterest.com" target="_blank">
              Pinterest
            </a>
          </div>
        )}
        <button onClick={this.toggle}>Share</button>
      </div>
    );
  }
}
