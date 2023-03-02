import { useState } from "react";
import {
  searchByNameAndRegion,
  searchByRegion,
} from "../context/CountryActions";
import { useContext } from "react";
import CountryContext from "../context/CountryContext";
import { CountryActionType } from "../context/CountryType";
import { FaTimes } from "react-icons/fa";

const DropDown = () => {
  const [isShowDD, setIsShowDD] = useState(false);
  const { state, dispatch } = useContext(CountryContext);

  const handleReset = () => {
    dispatch({
      type: CountryActionType.SET_LOADING,
    });
    dispatch({
      type: CountryActionType.RESET_SEARCH,
    });
    setIsShowDD(false);
  };

  const handleRegion = async (region: string) => {
    dispatch({
      type: CountryActionType.SET_LOADING,
    });
    setIsShowDD(false);
    if (state.searchKey == "") {
      const data = await searchByRegion(region);
      dispatch({
        type: CountryActionType.SEARCH_REGION,
        payload: {
          country: data,
          region: region,
        },
      });
    } else {
      const data = await searchByNameAndRegion(state.searchKey, region);
      dispatch({
        type: CountryActionType.SEARCH_NAME_REGION,
        payload: {
          country: data,
          region: region,
        },
      });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsShowDD(!isShowDD)}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-black rounded-lg bg-white dark:bg-dark-blue dark:text-white  p-4 text-sm text-start inline-flex items-center shadow"
        type="button">
        Filter by region
        <svg
          className="w-4 h-4 ml-10"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className={`z-10 mt-3 ${
          isShowDD ? "block" : "hidden"
        } bg-white dark:bg-dark-blue  divide-y divide-gray-100 rounded-lg shadow w-44 absolute`}>
        <ul
          className="py-2 text-sm text-black dark:text-white"
          aria-labelledby="dropdownDefaultButton">
          <li
            className={`flex w-full justify-between items-center px-4 py-2 hover:bg-very-dark-blue hover:text-white ${
              state.region === "Africa" && "bg-very-dark-blue text-white"
            }`}>
            <button
              type="button"
              className="flex flex-1"
              onClick={() => {
                handleRegion("Africa");
              }}>
              Africa
            </button>
            {state.region === "Africa" && (
              <FaTimes
                className="inline text-red-500 z-20 cursor-pointer"
                onClick={() => {
                  handleReset();
                }}
              />
            )}
          </li>
          <li
            className={`flex w-full justify-between items-center px-4 py-2 hover:bg-very-dark-blue hover:text-white ${
              state.region === "Americas" && "bg-very-dark-blue text-white"
            }`}>
            <button
              type="button"
              className="flex flex-1"
              onClick={() => {
                handleRegion("Americas");
              }}>
              America
            </button>
            {state.region === "Americas" && (
              <FaTimes
                className="inline text-red-500 z-20 cursor-pointer"
                onClick={() => {
                  handleReset();
                }}
              />
            )}
          </li>
          <li
            className={`flex w-full justify-between items-center px-4 py-2 hover:bg-very-dark-blue hover:text-white ${
              state.region === "Asia" && "bg-very-dark-blue text-white"
            }`}>
            <button
              type="button"
              className="flex flex-1"
              onClick={() => {
                handleRegion("Asia");
              }}>
              Asia
            </button>
            {state.region === "Asia" && (
              <FaTimes
                className="inline text-red-500 z-20 cursor-pointer"
                onClick={() => {
                  handleReset();
                }}
              />
            )}
          </li>
          <li
            className={`flex w-full justify-between items-center px-4 py-2 hover:bg-very-dark-blue hover:text-white ${
              state.region === "Europe" && "bg-very-dark-blue text-white"
            }`}>
            <button
              type="button"
              className="flex flex-1"
              onClick={() => {
                handleRegion("Europe");
              }}>
              Europe
            </button>
            {state.region === "Europe" && (
              <FaTimes
                className="inline text-red-500 z-20 cursor-pointer"
                onClick={() => {
                  handleReset();
                }}
              />
            )}
          </li>
          <li
            className={`flex w-full justify-between items-center px-4 py-2 hover:bg-very-dark-blue hover:text-white ${
              state.region === "Oceania" && "bg-very-dark-blue text-white"
            }`}>
            <button
              type="button"
              className="flex flex-1"
              onClick={() => {
                handleRegion("Oceania");
              }}>
              Oceania
            </button>
            {state.region === "Oceania" && (
              <FaTimes
                className="inline text-red-500 z-20 cursor-pointer"
                onClick={() => {
                  handleReset();
                }}
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
