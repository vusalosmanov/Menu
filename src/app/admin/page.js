'use client'
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '../firebaseConfig';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Firestore-dan istifadəçinin rolunu yoxla
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();

      if (userData?.role === "admin") {
        router.push('/admin/dashboard'); // Admin olduğunda dashboard səhifəsinə yönləndir
      } else {
        router.push('/admin/dashboard'); // Əks halda əsas səhifəyə yönləndir
      }
    } catch (err) {
      setError("Yanlış email və ya parol!");
    }
  };

  const handleRegisterRedirect = (e) => {
    e.preventDefault();
    router.push('/admin/register'); // Register səhifəsinə yönləndirir
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login / Register
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="flex justify-between">
            <button
              onClick={handleLogin}
              className="w-1/2 mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md focus:outline-none"
            >
              Login
            </button>
            <button
              onClick={handleRegisterRedirect}
              className="w-1/2 ml-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md focus:outline-none"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
