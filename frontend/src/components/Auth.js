// components/Auth.js
"use client";
import { useEffect, useState } from 'react';
import { signInWithGoogle, logout } from '../lib/firebaseAuth';
import { auth } from '../lib/firebaseConfig'; // Import Firebase auth
import '../app/globals.css';
export default function Auth() {
  const [user, setUser] = useState(null);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
}
