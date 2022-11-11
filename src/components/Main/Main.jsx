import React from "react";
import { useState } from "react";
import "./Main.scss";
import Modal from "../Modal/Modal";

function Main({ listItems, setLiked, liked, handleClick, style }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selImg, setSelImg] = useState();


  const likeHandler = (item, id) => {
    if (!liked.includes(item)) {
      setLiked((liked) => [...liked, item]);
      handleClick(id);
    } else if (liked.includes(item)) {
      liked.splice(liked.indexOf(item), 1);
      setLiked((liked) => [...liked]);
      handleClick(id)
    }
  };

  return (
    <div className="wrapper">
      {listItems.hits?.map((item) => (
        <div key={item.id}>
          <ul className="wrapper-items">
            <li>
              <img
                src={item.previewURL}
                key={item.id}
                alt={item.id}
                className="grid-item"
              ></img>
              <div className="overlay">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="img-expand"
                  style={{ width: 20 }}
                  onClick={() => {
                    setSelImg(item);
                    setIsOpen(true);
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="img-love"
                  key={item.id}
                  style={{
                    width: 50,
                    fill: style[`${item.id}`] ? "red" : "none",
                  }}
                  onClick={() => {
                    likeHandler(item, item.id);
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      ))}
      {isOpen && (
        <Modal
          addStyle={style}
          modalImg={selImg}
          setIsOpen={setIsOpen}
          likeHandler={likeHandler}
          handleClick={handleClick}
        ></Modal>
      )}
    </div>
  );
}

export default Main;
