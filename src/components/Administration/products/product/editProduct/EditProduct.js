import React from 'react';
import ProductOp from '../ProductOp';

const EditProduct = ({
  route,
  message,
  success,
  updateProductCategoryRequest,
  updateProductCategoryFinished,
}) => {
  const {product, category, prices, serviceName} = route.params;

  return (
    <ProductOp
      product={product}
      prices={prices}
      category={category}
      serviceName={serviceName}
      message={message}
      success={success}
      productCategoryRequestOp={updateProductCategoryRequest}
      productCategoryFinishedOp={updateProductCategoryFinished}
    />
  );
};

export default EditProduct;
