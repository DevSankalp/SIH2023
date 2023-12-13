import React from "react";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { auth } from '../../firebase';

function Tracker() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="bg-white rounded-xl p-4 overflow-hidden shadow-[0_0_5px_rgba(0,0,0,.2)] mb-8">
<h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
      {user && (
        <div>
          <p className="text-lg">
            <span className="font-bold">Display Name:</span> {user.displayName}
          </p>
          <p className="text-lg">
            <span className="font-bold">Email:</span> {user.email}
          </p>
          {/* You can display other user information here */}
        </div>
      )}
    </div>
  );
}

export default Tracker;
