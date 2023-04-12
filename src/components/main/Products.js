import React, { useEffect, useState } from 'react';
import '../style/Products.css'
import axiosInstance from '../..';

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
        .get('https://638b-223-194-155-186.ngrok-free.app/gifts', { withCredentials: true })
        //CORS문제발생
        .then((res) => {
          setProducts(res.data);
        });

    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  if (loading) return <Loading loading={loading} />
const Products = ({ props, onClickProduct }) => {

  return (
    <div className='container-pd'>
      <div className='row'>
        {
          props.map((product, index) => {
            if (index < 10) {
              return (
                <div key={index} className="col-md-3 gird">
                  <img src={`${product.image}`} alt="" width="100%" />
                  <p onClick={(e) => onClickProduct( e, product.href)}>{product.title}</p>
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