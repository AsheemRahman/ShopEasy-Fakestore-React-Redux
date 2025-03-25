# ShopEasy Fakestore React Redux

This is a React project using **Redux Toolkit** to fetch and display products from the **FakeStore API**. It includes features like pagination, category filtering, and product search.

## Features

- Fetch products from [FakeStore API](https://fakestoreapi.com/)
- Display products in a paginated list
- View product details on a separate page
- Filter products by category
- Implement product search filtering
- Uses Redux Toolkit for state management

## Tech Stack

- React.js
- Redux Toolkit
- React Router
- Tailwind CSS (for styling)
- Axios (for API requests)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AsheemRahman/ShopEasy-Fakestore-React-Redux.git
   cd ShopEasy-Fakestore-React-Redux
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## Project Structure
```
redux-toolkit-fakestore/
├── src/
│   ├── components/       # Pages (ProductList, ProductDetail, etc.)
│   ├── redux/            # Redux Toolkit store, slices
│   ├── services/         # API service functions
│   ├── App.js            # Main App component
├── public/               # Static assets
├── package.json          # Project dependencies
├── README.md             # Project documentation
```

## API Usage

- **Get all products:** `https://fakestoreapi.com/products`
- **Get product by ID:** `https://fakestoreapi.com/products/{id}`
- **Get categories:** `https://fakestoreapi.com/products/categories`
- **Get products by category:** `https://fakestoreapi.com/products/category/{category}`


