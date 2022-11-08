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

  const keyAPI = "26032813-5eca57a90774446a771ac3a81";
  const fetchAPI = `https://pixabay.com/api/?key=${keyAPI}&q=${filter}&per_page=7`;



  localStorage.setItem("liked", JSON.stringify(liked));


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
    };
    fetchData();
  }, [fetchAPI]);

  return (
    <div className="App">
      <Header
        setFilter={setFilter}
        liked={liked}
        filter={filter}
      />
      <Main
        listItems={list}
        filtered={filter}
        setLiked={setLiked}
        liked={liked}
      />
    </div>
  );
}

export default App;
