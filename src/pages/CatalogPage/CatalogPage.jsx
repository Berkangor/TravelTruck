import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/truck/operations";
import TruckList from "../../components/TruckList/TruckList";
import Filters from "../../components/Filters/Filters";
import style from "./CatalogPage.module.css";
import { selectFilteredTrucks } from "../../redux/filters/filters.selectors";
import { isLoading } from "../../redux/truck/truck.selectors";

const INITIAL_VISIBLE_COUNT = 4; 

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filteredTrucks = useSelector(selectFilteredTrucks);
  const loading = useSelector(isLoading);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [filteredTrucks]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + INITIAL_VISIBLE_COUNT);
  };

  return (
    <div className={style.pageWrapper}>
      <Helmet>
        <title>Trucks catalog</title>
      </Helmet>
      <section className={style.catalog_container}>
        <Filters />
        <div className={style.buttonWrapper}>
          <TruckList filteredTrucks={filteredTrucks.slice(0, visibleCount)} />
          {!loading && visibleCount < filteredTrucks.length && (
            <button
              className={style.search_button}
              type="button"
              onClick={handleLoadMore}
            >
              Load more
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default CatalogPage;