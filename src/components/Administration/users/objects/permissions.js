'use strict';

export const initPermissions = {
  addProduct: false,
  updateProductPrice: false,
  updateProduct: false,
  addUser: false,
  viewUser: false,
  updateUser: false,
  updateCredit: false,
  viewcmnd: false,
  confirmPayment: false,
};

export const permissionsBody = [
  {key: 'addProduct', label: 'إضافة منتج'},
  {key: 'updateProductPrice', label: 'تغيير سعر منتج'},
  {key: 'updateProduct', label: 'تعديل منتج'},
  {key: 'addUser', label: 'إضافة عميل'},
  {key: 'viewUser', label: 'مشاهدة العملاء'},
  {key: 'updateUser', label: 'تعديل عميل'},
  {key: 'updatePermissions', label: 'تحديد الرخص'},
  {key: 'updateCredit', label: 'تعديل محفظة العميل'},
  {key: 'viewcmnd', label: 'مشاهدة الطلبات'},
  {key: 'confirmPayment', label: 'تأكيد الدفع'},
];
