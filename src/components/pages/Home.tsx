import DropDown from "../UI/Dropdown";
import CountryItem from "./../country/CountryItem";
import Search from "./../UI/Search";

import { useContext } from "react";
import CountryContext from "../context/CountryContext";

const Home = () => {
  const { state } = useContext(CountryContext);
  const NoItem = () => {
    return <div className="mt-5 dark:text-white">No country matched</div>;
  };
  return (
    <div>
      <div className="container mx-auto pt-10 flex flex-col gap-5 md:flex-row justify-between">
        <Search />
        <DropDown />
      </div>

      <div className="container mx-auto grid gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-4 xl:gap-14 mt-10 md:mt-16 pb-20">
        {state.country ? (
          state.country.length > 1 ? (
            state.country.map(country => {
              return (
                <CountryItem country={country} key={country.name.official} />
              );
            })
          ) : (
            <NoItem />
          )
        ) : (
          <NoItem />
        )}
      </div>
    </div>
  );
};

export default Home;
