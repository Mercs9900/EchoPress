import React, { Component } from "react";
import loading from "./loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <>
        <div className="my-4">
        <img src={loading} alt="loading" /><br></br>
        <p style={{textAlign:"center", fontWeight: "900" , fontFamily: "Montserrat, sans-serif"}}>Loading....</p>
        </div>
      </>
    );
  }
}
