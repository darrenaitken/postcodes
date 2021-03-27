// Node Modules
import React from "react";
import { ToastContainer } from "react-toastify";

// CSS
import "../styles/Variables.css";
import "../styles/App.css";

// Components
import Logo from "../components/logo";
import SearchResults from "../components/searchResults";

// Component: App
const App = () => {
  return (
    <>
      <ToastContainer />
      <Logo />
      <SearchResults />
    </>
  );
};

export default App;
