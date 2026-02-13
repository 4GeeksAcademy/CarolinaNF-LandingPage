import React from "react";

function Card({ title, text, image }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 text-center">
        <img
          src={image}
          className="card-img-top"
          alt="card"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary btn-sm">
            Find Out More!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;