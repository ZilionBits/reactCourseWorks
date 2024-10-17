import { useForm } from "react-hook-form";
import { Stack } from "react-bootstrap";
import { SearchFormCarContext } from "./SearchFormCarProvider";
import { useContext } from "react";

export const SearchForm = () => {
  const { register, handleSubmit } = useForm();

  const { setSearchData } = useContext(SearchFormCarContext);

  const onSubmit = (data) => setSearchData(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={3} style={{ width: "50%", margin: "auto" }}>
        <label>Filter by Brand:</label>
        <select {...register("brand")}>
          <option value="">Show All</option>
          <option value="bmw">BMW</option>
          <option value="vw">Volkswagen</option>
          <option value="audi">Audi</option>
        </select>
        <label>Filter by Year:</label>
        <label>
          <input type="checkbox" defaultChecked={true} value={2018} {...register("year")} />
          2018 year
        </label>
        <label>
          <input type="checkbox" value={2019} {...register("year")} />
          2019 year
        </label>
        <label>
          <input type="checkbox" value={2020} {...register("year")} />
          2020 year
        </label>
        <label>Filter by Price:</label>
        <label>
          From:
          <input type="number" {...register("priceFrom")} />
        </label>
        <label>
          To:
          <input type="number" {...register("priceTo")} />
        </label>
        <input type="submit"/>
      </Stack>
    </form>
  );
};
