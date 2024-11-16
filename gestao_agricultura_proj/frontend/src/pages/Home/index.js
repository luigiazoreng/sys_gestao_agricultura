import React, { Component } from "react";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
      <h2>Gestão de Agricultura Familiar</h2>
      <p>Conheça nossa ferramenta de gestão de produção.</p>
      <p>Criada para atender as demandas do pequeno agricultor familiar.</p>
      <style jsx>{`
      .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
      font-family: Arial, sans-serif;
      }
      h2 {
      font-size: 2.5em;
      font-weight: bold;
      }
      p {
      font-size: 1.5em;
      color: white;
      }
      `}</style>
      </div>
    );
  }
}
