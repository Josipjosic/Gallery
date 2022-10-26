import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('');


  const keyAPI = "26032813-5eca57a90774446a771ac3a81"
  const fetchAPI = `https://pixabay.com/api/?key=${keyAPI}&q=${filter}&per_page=8`;


  
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

  console.log(list, filter);

  return (
    <div className="App">
      <Header setFilter={setFilter} />
      <Main listItems={list} filtered={filter}/>
    </div>
  );
}

export default App;
