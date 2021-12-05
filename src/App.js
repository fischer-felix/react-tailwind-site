import './App.css';
import Product from './components/Product';
import products from './data/products.json'
import React from 'react';
//import { FaDev } from 'react-icons/fa';

import styles from './App.module.css';
import useNavigation from './hooks/useNavigation';
import navigationData from './data/navigation';

import Navbar from './components/Navbar';
import Tabbar from './components/Tabbar';

const App = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();

  return (
    <div className={styles.containter}>
      <Navbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <Tabbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <div className='px-4 pt-4 md:px-0 md:w-1/2 mx-auto'>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
