import React from "react";

export default function Player(props) {
  return (
    <div className="p-3 border bg-dark">
      <div className="container">
        <ul>
          <div>
            <h2 className="text-light bg-dark">
              {props.name}: {props.lifetotal}
            </h2>
            <button
              onClick={() => {
                props.changeLifetotal(props.id, +5);
              }}
            >
              +5
            </button>
            <button
              onClick={() => {
                props.changeLifetotal(props.id, 1);
              }}
            >
              +1
            </button>
            <button
              onClick={() => {
                props.changeLifetotal(props.id, -1);
              }}
            >
              -1
            </button>
            <button
              onClick={() => {
                props.changeLifetotal(props.id, -5);
              }}
            >
              -5
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
