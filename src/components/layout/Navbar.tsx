import { FaMoon } from "react-icons/fa";
import { useState, useContext } from "react";
import CountryContext from "../context/CountryContext";
import { CountryActionType } from "../context/CountryType";

const Navbar = () => {
  const { state, dispatch } = useContext(CountryContext);

  const handleTheme = () => {
    if (state.theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      dispatch({ type: CountryActionType.SET_DARK_THEME });
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      dispatch({ type: CountryActionType.SET_LIGHT_THEME });
    }
  };

  return (
    <nav className="p-4 shadow bg-white dark:bg-dark-blue">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold text-xl dark:text-white">
          Where in the world?
        </h1>
        <button
          className="font-semibold flex justify-center items-center dark:text-white"
          onClick={() => {
            handleTheme();
          }}>
          <FaMoon className="mr-3 inline-flex" /> Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
