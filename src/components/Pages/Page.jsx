import React from "react";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Page.scss";

function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [selImg, setSelImg] = useState();
  const [style, setStyle] = useState(() => {
    return JSON.parse(localStorage.getItem("style")) || [];
  });
  const [liked, setLiked] = useState(() => {
    return JSON.parse(localStorage.getItem("liked")) || [];
  });

  localStorage.setItem("liked", JSON.stringify(liked));
  localStorage.setItem("style", JSON.stringify(style));

  const handleClick = (id) => {
    setStyle((prevState) => ({
      ...style,
      [id]: !prevState[id],
    }));
  };
  const likeHandler = (item, id) => {
    const duplicate = liked.some((value) => value.id === item.id);
    if (duplicate) {
      liked.splice(liked.indexOf(item), 1);
      setLiked((liked) => [...liked]);
      handleClick(id);
    } else if (!liked.includes(item)) {
      setLiked((liked) => [...liked, item]);
      handleClick(id);
    }
  };


  return (
    <div>
      <div className="nav-bar">
        <h3 className="nav-title">Liked Images</h3>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
      </div>
      <div className="main-content">
        {liked.length > 0 ? (
          liked.map((img) => (
            <div key={img.id}>
              <div
                key={img.id}
                className="content"
                onClick={() => {
                  setSelImg(img);
                  setIsOpen(true);
                }}
              >
                <img
                  src={img.webformatURL}
                  alt="ok"
                  key={img.webformatURL}
                ></img>
              </div>
              {isOpen && (
                <Modal
                  modalImg={selImg}
                  setIsOpen={setIsOpen}
                  likeHandler={likeHandler}
                  handleClick={handleClick}
                  addStyle={style}
                ></Modal>
              )}
            </div>
          ))
        ) : (
          <h2 className="content-text">No items added to the list!</h2>
        )}
      </div>
    </div>
  );
}

export default Page;
