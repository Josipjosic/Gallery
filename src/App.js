import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("");
  const [liked, setLiked] = useState(() => {
   return JSON.parse(localStorage.getItem("liked")) || [];
  });
  const [style, setStyle] = useState([]);

  const keyAPI = "26032813-5eca57a90774446a771ac3a81";
  const fetchAPI = `https://pixabay.com/api/?key=${keyAPI}&q=${filter}&per_page=8`;

  const handleClick = (i) => {
    setStyle((prevState) => ({
      ...style,
      [i]: !prevState[i],
    }));
  };

  localStorage.setItem("liked", JSON.stringify(liked))

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(fetchAPI, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setList(data);
      localStorage.getItem("liked", JSON.stringify(this.liked))
    };
    fetchData();
  }, [fetchAPI]);

  return (
    <div className="App">
      <Header
        setFilter={setFilter}
        liked={liked}
        filter={filter}
        style={style}
        handleClick={handleClick}
      />
      <Main
        listItems={list}
        filtered={filter}
        setLiked={setLiked}
        liked={liked}
        style={style}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
