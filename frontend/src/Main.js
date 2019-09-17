import React, { Component } from "react";
import api from "./service/api"
import socket from "socket.io-client";

export default class Main extends Component {
  state = {
    summonerName: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const response = await api.post("match", {
      summonerName: this.state.summonerName
    });

    console.log(response);

    const io = socket("http://localhost:3000");

    io.emit("connectRoom", this.state.summonerName);

    io.on("match", data => {
      console.log(data);
      alert(data);
    });
  };

  handleInputChange = e => {
    this.setState({ summonerName: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="SummonerName"
            value={this.state.summonerName}
            onChange={this.handleInputChange}
          />
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}