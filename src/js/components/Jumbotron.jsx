import React from "react";

function Jumbotron() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-4">Aburridísimo!</h1>
        <p className="lead">
          Vamos a jugar a un juego que es ser diferentes, vamos a cambiar las reglas y a desenredar la mente.
        </p>
        <button className="btn btn-primary btn-lg">
          Click aquí!
        </button>
      </div>
    </div>
  );
}

export default Jumbotron;