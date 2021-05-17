import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';
import ListMovies from "./components/ListMovies";
import Search from "./components/Search"
import AddModal from"./components/AddModal";


function App() {
  const [search,setSearch]=useState("")
  const settitleSearch=(x)=>{
    setSearch(x)
  }
  return (
    <div className="App">
      <h1>THE MOVIE CARD</h1>
      <Search settitleSearch={settitleSearch}/>
      <ListMovies search={search}/>
      <AddModal/>
    </div>
  );
}

export default App;
