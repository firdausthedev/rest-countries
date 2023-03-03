import DropDown from "../UI/Dropdown";
import CountryItem from "./../country/CountryItem";
import Search from "./../UI/Search";

import { useContext } from "react";
import CountryContext from "../context/CountryContext";
import Spinner from "../UI/Spinner";

const Home = () => {
  const { state } = useContext(CountryContext);
  const NoItem = () => {
    return <div className="mt-5 dark:text-white">No country matched</div>;
  };
  return (
    <main>
      <header className="container mx-auto p-3 md:p-5 pt-10 flex flex-col gap-5 md:flex-row justify-between">
        <Search />
        <DropDown />
      </header>

      {state.loading ? (
        <div className="container mx-auto p-5 w-full flex justify-center">
          <Spinner />
        </div>
      ) : (
        <section className="container mx-auto p-3 md:p-5 grid gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-4 xl:gap-14 mt-10 md:mt-16 pb-20">
          {state.country.length > 1 ? (
            state.country.map(country => {
              return (
                <CountryItem country={country} key={country.name.official} />
              );
            })
          ) : (
            <NoItem />
          )}
        </section>
      )}
    </main>
  );
};

export default Home;
