import React from "react";
import "./Main.scss";

function Main({ listItems}) {
  return (
    <div className="wrapper">
      {listItems.hits?.map((item) => (
          <ul key={item.id} className="wrapper-items">
            <li>
              <img
                src={item.webformatURL}
                key={item.id}
                alt={item.id}
                className="grid-item"
              ></img>
            </li>
          </ul>
        ))}
    </div>
  );
}

export default Main;
