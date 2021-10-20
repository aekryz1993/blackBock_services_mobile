import React from 'react';
import ProductOp from '../ProductOp';

const AddProduct = ({
  route,
  addProductCategoryRequest,
  addProductCategoryFinished,
  success,
  message,
}) => {
  const {category, serviceName} = route.params;

  return (
    <ProductOp
      category={category}
      serviceName={serviceName}
      message={message}
      success={success}
      productCategoryRequestOp={addProductCategoryRequest}
      productCategoryFinishedOp={addProductCategoryFinished}
    />
  );
};

export default AddProduct;
