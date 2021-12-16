import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import Preloader from '../components/Preloader';
import { List as CategoryList } from '../components/Category';

function Home() {
  const [catalog, setCatalog] = useState([]);
  const isCatalogEmpty = catalog.length === 0;

  const content = isCatalogEmpty ? (
    <Preloader />
  ) : (
    <CategoryList catalog={catalog} />
  );

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data);
    });
  }, []);

  return content;
}

export default Home;
