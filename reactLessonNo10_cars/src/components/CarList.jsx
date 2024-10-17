import carsData from "../data/cars.json";
import { CarCard } from "./CarCard";
import { SearchFormCarContext } from "./SearchFormCarProvider";
import { useContext } from "react";

export const CarList = () => {
  const { searchData } = useContext(SearchFormCarContext);

  console.log(searchData);

  return (
    <>
      {carsData
        .filter(
          (car) =>
            //If brand now selected show all.
            (searchData.brand === "" ||
              car.name
                .toLowerCase()
                .includes(searchData.brand.toLowerCase())) &&
            //If year not selected show all.
            (searchData.year.length === 0 ||
              searchData.year.includes(car.release_year.toString())) &&
            //If price range empty show all, if atleast one value given show in it range or in than interval.
            ((searchData.priceFrom === "" && searchData.priceTo === "") ||
              (car.price >= searchData.priceFrom ||
                car.price <= searchData.priceTo))
        )
        .map((car) => (
          <CarCard
            key={car.name}
            name={car.name}
            year={car.release_year}
            price={car.price}
            url={car.url}
          />
        ))}
    </>
  );
};
