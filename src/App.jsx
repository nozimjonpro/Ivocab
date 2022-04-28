import React from "react";
import "./App.scss";
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
const [isNavOpen, setNavIsOpen] = React.useState(false)
  return (
    <div className="container">
      <Header setNavIsOpen = {setNavIsOpen} isNavOpen = {isNavOpen}></Header>
      <div className="middle">
      <Navigation isNavOpen = {isNavOpen}></Navigation>
      <Main isNavOpen = {isNavOpen}></Main>
      </div>
    </div>
  );
}

export default App;
