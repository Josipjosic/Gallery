import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header({ filter, setFilter, liked }) {

  return (
    <div className="search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
        strokeWidth={1}
        stroke="currentColor"
        className="w-5 h-5"
        style={{ width: 20, marginTop: 9 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        className="search-bar"
        placeholder="Search"
        onChange={(event) => {
          setFilter(event.target.value);
        }}
        value={filter}
      ></input>
      <Link to='/profile' state={liked}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="black"
          className="w-1"
        >
          <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
        </svg>
      </Link>
      <p className="like-counter">{liked.length}</p>
    </div>
  );
}

export default Header;
