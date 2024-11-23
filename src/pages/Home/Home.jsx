import { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import Loading from '../../Components/Loading/Loading';
import axios from 'axios';
export default function Home() {
  let [products, setProducts] = useState(null);
  //* Using Fetch
  /*  async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    let data = await response.json();
    setProducts(data);
  } */
  //*Using axios
  async function getProducts() {
    const options = {
      url: 'https://fakestoreapi.com/products',
      method: 'GET',
    };
    let { data } = await axios.request(options);
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section className="py-5">
        <div className="container mx-auto px-2 grid grid-cols-12 gap-3 mb-10 ">
          {products === null ? (
            <Loading />
          ) : (
            products.map((product) => (
              <Card productInfo={product} key={product.id} />
            ))
          )}
        </div>
      </section>
    </>
  );
}

//* () in ruturn => عشان لو هنزل سطر ومينفعش اعمل return لى
