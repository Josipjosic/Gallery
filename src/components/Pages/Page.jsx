import React from "react";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Page.scss";

function Page() {
  const location = useLocation();
  const data = location.state;

  const [wasLiked] = useState(data);

  const [isOpen, setIsOpen] = useState(false);
  const [selImg, setSelImg] = useState();
  const [itemLiked, setItemLiked] = useState(false);


  console.log(wasLiked)

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
        {wasLiked.map((img, i) => (
          <div>
            <div
              key={img.id}
              className="content"
              onClick={() => {
                setSelImg(img.webformatURL);
                setIsOpen(true);
                console.log(img)
              }}
            >
              <img src={img.webformatURL} alt="ok" key={img.id}></img>
            </div>
            {isOpen && (
              <Modal
                i = {i}
                setImgLiked={setItemLiked}
                liked={itemLiked}
                modalImg={selImg}
                setIsOpen={setIsOpen}
              ></Modal>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
