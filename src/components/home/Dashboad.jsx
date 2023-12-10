import React from "react";


const Dashboard = () => {
  // Placeholder data for demonstration
  const products = [
    { id: 1, name: "Product 1", price: 25 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 40 },
    // Add more products as needed
  ];

  return (
    <div className="dashboard">
      <header>
        <h1>E-commerce Dashboard</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Products</li>
            <li>Orders</li>
            <li>Settings</li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2023 E-commerce Dashboard</p>
      </footer>
    </div>
  );
};

export default Dashboard;
