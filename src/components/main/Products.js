import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import axios from 'axios';
import '../style/Products.css'

const Products = (onClickFavorite) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState({});

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      await axios
        .get('https://goldsergeant.github.io/testJson/')
        .then((res) => {
          setProducts(res.data);
        });

    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  if (loading) return <Loading loading={loading} />

  return (
    <>
      <div className='products'>
        {
          products.gifts && products.gifts.map((product, index) => {
            return (
              <div key={index}>
                <img src={`${product.image}`} alt="" width="20%" />
                <h4>{product.title}</h4>
              </div>
            );
          })
        }
      </div>
    </>
  );

}

export default Products;