export const navOptions = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
  },
  {
    id: 'listing',
    label: 'All Products',
    path: '/product/listing/all-products',
  },
  {
    id: 'listingMen',
    label: 'Proteins',
    path: '/product/listing/proteins',
  },
  {
    id: 'listingWomen',
    label: 'Gainers, Pre and post workouts',
    path: '/product/listing/gainers',
  },
];

export const adminNavOptions = [
  {
    id: 'adminListing',
    label: 'Manage All Products',
    path: '/admin-view/all-products',
  },
  {
    id: 'adminNewProduct',
    label: 'Add New Product',
    path: '/admin-view/add-products',
  },
];

export const registrationFormControls = [
  {
    id: 'name',
    type: 'text',
    placeholder: 'Enter your name',
    label: 'Name',
    componentType: 'input',
  },
  {
    id: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    label: 'Email',
    componentType: 'input',
  },
  {
    id: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
    componentType: 'input',
  },
  {
    id: 'role',
    type: '',
    placeholder: '',
    label: 'Role',
    componentType: 'select',
    options: [
      {
        id: 'admin',
        label: 'Admin',
      },
      {
        id: 'customer',
        label: 'customer',
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    label: 'Email',
    componentType: 'input',
  },
  {
    id: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
    componentType: 'input',
  },
];

export const adminAddProductformControls = [
  {
    id: 'name',
    type: 'text',
    placeholder: 'Enter name',
    label: 'Name',
    componentType: 'input',
  },
  {
    id: 'price',
    type: 'number',
    placeholder: 'Enter price',
    label: 'Price',
    componentType: 'input',
  },
  {
    id: 'description',
    type: 'text',
    placeholder: 'Enter description',
    label: 'Description',
    componentType: 'input',
  },
  {
    id: 'category',
    type: '',
    placeholder: '',
    label: 'Category',
    componentType: 'select',
    options: [
      {
        id: 'men',
        label: 'Proteins',
      },
      {
        id: 'women',
        label: 'Gainers and pre and post workouts',
      },
    ],
  },
  {
    id: 'deliveryInfo',
    type: 'text',
    placeholder: 'Enter deliveryInfo',
    label: 'Delivery Info',
    componentType: 'input',
  },
  {
    id: 'onSale',
    type: '',
    placeholder: '',
    label: 'On Sale',
    componentType: 'select',
    options: [
      {
        id: 'yes',
        label: 'Yes',
      },
      {
        id: 'no',
        label: 'No',
      },
    ],
  },
  {
    id: 'priceDrop',
    type: 'number',
    placeholder: 'Enter Price Drop',
    label: 'Price Drop',
    componentType: 'input',
  },
];

export const AvailableSizes = [
  {
    id: 's',
    label: '1Kg',
  },
  {
    id: 'm',
    label: '2Kg',
  },
  {
    id: 'l',
    label: '5Kg',
  },
];

export const firebaseConfig = {
  apiKey: 'AIzaSyDUppIwgiu3TE_xk8NX42jTkqSEBhOdZH8',
  authDomain: 'gur-yux-new.firebaseapp.com',
  projectId: 'gur-yux-new',
  storageBucket: 'gur-yux-new.appspot.com',
  messagingSenderId: '199759436876',
  appId: '1:199759436876:web:f3418dfda372579cd8e8e9',
  measurementId: 'G-43HBKNH72Y',
};

export const firebaseStorageURL = 'gs://gur-yux-new.appspot.com';

export const addNewAddressFormControls = [
  {
    id: 'fullName',
    type: 'input',
    placeholder: 'Enter your full name',
    label: 'Full Name',
    componentType: 'input',
  },
  {
    id: 'address',
    type: 'input',
    placeholder: 'Enter your full address',
    label: 'Address',
    componentType: 'input',
  },
  {
    id: 'city',
    type: 'input',
    placeholder: 'Enter your city',
    label: 'City',
    componentType: 'input',
  },
  {
    id: 'country',
    type: 'input',
    placeholder: 'Enter your country',
    label: 'Country',
    componentType: 'input',
  },
  {
    id: 'postalCode',
    type: 'input',
    placeholder: 'Enter your postal code',
    label: 'Postal Code',
    componentType: 'input',
  },
];
