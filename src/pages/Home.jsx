import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import Preloader from '../components/Preloader';
import { List as CategoryList } from '../components/Category';
import Search from '../components/Search';

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.name.toLowerCase().includes(str.toLowerCase()),
      ),
    );
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
      setFilteredCatalog(data);
    });
  }, []);

  return (
    <>
      <Search cb={handleSearch} />
      {content}
    </>
  );
}

export default Home;
