import { useState, useEffect } from 'react';

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch('api/avo')
      .then(response => response.json())
      .then(({ data, length }) => {
        setProductList(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>Platzi and Next.js!</h1>
      <ol>
        {productList.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default HomePage;
