import React, { useRef, useState } from "react";
import Navbar from "./Components/Navabar/Navbar";
import { Main } from "./App.style";
import { Outlet } from "react-router-dom";

function App() {
  const mainRef = useRef();
  const [isReached, setIsReached] = useState(false);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    console.log("scrollTop : ", scrollTop);
    console.log("clientHeight : ", clientHeight);
    console.log("scrollHeight : ", scrollHeight);

    if (scrollTop + clientHeight === scrollHeight) {
      setIsReached(true);
      console.log("at the bottom");
    } else {
      setIsReached(false);
    }
  };

  return (
    <Main onScroll={handleScroll} isReached={isReached}>
      <Navbar />
      <Outlet />
    </Main>
  );
}

export default App;
