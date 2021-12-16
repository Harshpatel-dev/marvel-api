import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllComics from "./Components/CardContainer/AllComics/AllComics";
import SearchedComics from "./Components/CardContainer/SearchedComic/SearchedComics";
import DetailScreen from "./Components/DetailScreen/DetailScreen";
import Navbar from "./Components/Navabar/Navbar";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<AllComics />} />
        <Route path=":id" element={<SearchedComics />} />
        <Route path="detail/:id" element={<DetailScreen />} />
        {/* localhost::300/spider/detail */}
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
