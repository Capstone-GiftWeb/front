import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import axios from 'axios';
import '../style/Products.css'

const Products = (onClickFavorite) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState({});

  useEffect(() => {
    // 컴포넌트가 마운트 됐을 때, 상품 데이터를 가져오는 함수 호출
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      // 로딩창을 실행
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
    <div className='container-pd'>
      <div className='row'>
        {
          products.gifts && products.gifts.map((product, index) => {
            if (index < 10) {
              return (
                <div key={index} className="col-md-4 gird">
                  <a href={product.href}>{product.title}</a>
                  <img src={`${product.image}`} alt="" width="90%" />
                </div>
              );
            }
          })
        }
      </div>
    </div>
  );

}

export default Products;