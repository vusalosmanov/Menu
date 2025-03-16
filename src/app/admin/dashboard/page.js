'use client'
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConfig';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="p-2 border-b">{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
