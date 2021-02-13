import React, { Component } from 'react';

export default class imageDetails extends Component {
  render() {
      const {title, thumbnailUrl} = this.props.location.state;
    return (
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen"
      }}

      > 
          <li>
              {title}
          </li>
          <li>
            
              <img src ={thumbnailUrl} alt="info"/>
          </li>
      </div>
    );
  }
}