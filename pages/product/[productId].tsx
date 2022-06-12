import { useRouter } from 'next/router';

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter();
  return <div>Product page: {productId}</div>;
};

export default ProductItem;
