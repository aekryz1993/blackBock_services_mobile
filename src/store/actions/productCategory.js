// --------------------- Add Product Category -------------------------------

export const ADDPRODUCTCATEGORY_REQUEST = 'ADDPRODUCTCATEGORY_REQUEST';
export const ADDPRODUCTCATEGORY_SUCCEED = 'ADDPRODUCTCATEGORY_SUCCEED';
export const ADDPRODUCTCATEGORY_FAILED = 'ADDPRODUCTCATEGORY_FAILED';
export const ADDPRODUCTCATEGORY_REQUEST_ENDED =
  'ADDPRODUCTCATEGORY_REQUEST_ENDED';

export const addProductCategoryRequest = ({
  category,
  body,
  categoryDispatch,
  serviceName,
}) => ({
  type: ADDPRODUCTCATEGORY_REQUEST,
  payload: {
    body,
    category,
    categoryDispatch,
    serviceName,
  },
});

export const addProductCategorySucced = response => ({
  type: ADDPRODUCTCATEGORY_SUCCEED,
  payload: {
    message: response.data.message,
    product: response.data.product,
    categoryDispatch: response.categoryDispatch,
    label: response.label,
    serviceName: response.serviceName,
    success: response.data.success,
  },
});

export const addProductCategoryFailed = response => ({
  type: ADDPRODUCTCATEGORY_FAILED,
  payload: {
    message: response.message,
    success: false,
  },
});

export const addProductCategoryFinished = () => ({
  type: ADDPRODUCTCATEGORY_REQUEST_ENDED,
  payload: {
    message: null,
    success: false,
  },
});

// --------------------- Update Product Category -------------------------------

export const UPDATEPRODUCTCATEGORY_REQUEST = 'UPDATEPRODUCTCATEGORY_REQUEST';
export const UPDATEPRODUCTCATEGORY_SUCCEED = 'UPDATEPRODUCTCATEGORY_SUCCEED';
export const UPDATEPRODUCTCATEGORY_FAILED = 'UPDATEPRODUCTCATEGORY_FAILED';
export const UPDATEPRODUCTCATEGORY_REQUEST_ENDED =
  'UPDATEPRODUCTCATEGORY_REQUEST_ENDED';

export const updateProductCategoryRequest = ({
  category,
  body,
  categoryDispatch,
  serviceName,
  categoryState,
  id,
}) => ({
  type: UPDATEPRODUCTCATEGORY_REQUEST,
  payload: {
    body,
    category,
    categoryDispatch,
    serviceName,
    categoryState,
    id,
  },
});

export const updateProductCategorySucced = response => ({
  type: UPDATEPRODUCTCATEGORY_SUCCEED,
  payload: {
    message: response.data.message,
    product: response.data.product,
    categoryDispatch: response.categoryDispatch,
    label: response.label,
    serviceName: response.serviceName,
    categoryState: response.categoryState,
    success: response.data.success,
  },
});

export const updateProductCategoryFailed = response => ({
  type: UPDATEPRODUCTCATEGORY_FAILED,
  payload: {
    message: response.message,
    success: false,
  },
});

export const updateProductCategoryFinished = () => ({
  type: UPDATEPRODUCTCATEGORY_REQUEST_ENDED,
  payload: {
    message: null,
    success: false,
  },
});

// --------------------- Add Codes -------------------------------

export const ADDCODES_REQUEST = 'ADDCODES_REQUEST';
export const ADDCODES_SUCCEED = 'ADDCODES_SUCCEED';
export const ADDCODES_FAILED = 'ADDCODES_FAILED';
export const ADDCODES_REQUEST_ENDED = 'ADDCODES_REQUEST_ENDED';

export const addCodesRequest = ({dataForm, categoryDispatch, serviceName}) => ({
  type: ADDCODES_REQUEST,
  payload: {
    dataForm,
    categoryDispatch,
    serviceName,
  },
});

export const addCodesSucced = response => ({
  type: ADDCODES_SUCCEED,
  payload: {
    message: response.data.message,
    newCategories: response.data.newCategories,
    categoryDispatch: response.categoryDispatch,
    label: response.label,
    serviceName: response.serviceName,
    success: response.data.success,
  },
});

export const addCodesFailed = response => ({
  type: ADDCODES_FAILED,
  payload: {
    message: response.message,
    success: false,
  },
});

export const addCodesFinished = () => ({
  type: ADDCODES_REQUEST_ENDED,
  payload: {
    message: null,
    success: false,
  },
});
