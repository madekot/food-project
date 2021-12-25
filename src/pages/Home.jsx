import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { getAllCategories } from '../api';

import Preloader from '../components/Preloader';
import { List as CategoryList } from '../components/Category';
import Search from '../components/Search';

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const { push } = useHistory();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.name.toLowerCase().includes(str.toLowerCase()),
      ),
    );
    push({
      pathname,
      search: `?search=${str}`,
    });
  };

  const isCatalogEmpty = catalog.length === 0;
  const content = isCatalogEmpty ? (
    <Preloader />
  ) : (
    <CategoryList catalog={filteredCatalog} />
  );

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data);
      setFilteredCatalog(
        search
          ? data.filter((item) =>
              item.name
                .toLowerCase()
                .includes(search.split('=')[1].toLowerCase()),
            )
          : data,
      );
    });
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {content}
    </>
  );
}

export default Home;
