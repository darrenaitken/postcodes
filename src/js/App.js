// Node Modules
import React from "react";

// CSS
import "../styles/Variables.css";
import "../styles/App.css";

// Components
import Logo from "../components/logo";
import SearchField from "../components/searchField";

// Component: App
const App = () => {
  return (
    <>
      <Logo />
      <div className="container-content">
        <SearchField />
      </div>
    </>
  );
};

export default App;
