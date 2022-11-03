import React from "react";
import { useState } from "react";
import "./Modal.scss";

function Modal({
  setIsOpen,
  modalImg,
  setLiked,
  liked,
  style,
  handleClick,
  i
}) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="dark-bg">
      <div className="centered">
        <div
          className="modal"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
        >
          <img src={modalImg} alt={modalImg} width="auto" height="auto"></img>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="img-x"
            style={{ width: 30 }}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          {isHovering && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="img-love"
              style={{ width: 80, fill: style[`${i}`] ? "red" : "none" }}
              onClick={() => {
                if (!liked.includes(modalImg)) {
                  setLiked((liked) => [...liked, modalImg]);
                  handleClick();
                } else if (liked.includes(modalImg)) {
                  liked.splice(liked.indexOf(modalImg), 1);
                  setLiked((liked) => [...liked]);
                  handleClick();
                }
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
