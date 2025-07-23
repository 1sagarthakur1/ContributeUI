import React, { useEffect } from 'react';
import contributeUiLOGO from '../../Images/Home/contributeUiLOGO.png';
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { user, loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();

  // 🔁 When user becomes authenticated, create them in backend
  useEffect(() => {
    const createUserIfAuthenticated = async () => {
      if (isAuthenticated && user) {
        try {
          const response = await fetch('https://contributeuibackend.onrender.com/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: user.name,
              email: user.email,
              image: user.picture,
            }),
          });

          if (!response.ok) {
            console.error("API response not OK. Logging out...");
            logout({ returnTo: window.location.origin });
          } else {
            const result = await response.json();
            console.log("User created:", result);
          }
        } catch (error) {
          console.error('Error creating user:', error);
          logout({ returnTo: window.location.origin });
        }
      }
    };

    createUserIfAuthenticated();
  }, [isAuthenticated, user, logout]);

  if (isLoading) return null;

  return (
    <nav className="navbar">
      <div className="Upper-navbar">
        <div>
          <div className="logo">
            <img id="logoImg" src={contributeUiLOGO} alt="logo" />
          </div>
        </div>
        {isAuthenticated ? (
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <img
              style={{ borderRadius: '50px', border: '2px solid white', width: '40px', height: '40px' }}
              src={user.picture}
              alt={user.name}
            />
            <button onClick={() => logout({ returnTo: window.location.origin })} style={{ marginRight: '50px', height: '30px' }} className='addTopDivButton'>
              <span style={{ fontSize: '12px' }} className="text">Log Out</span>
            </button>
          </div>
        ) : (
          <button onClick={loginWithRedirect} style={{ marginRight: '50px' }} className='addTopDivButton'>
            <span style={{ fontSize: '18px' }} className="text">Sign In</span>
          </button>
        )}
      </div>
    </nav>
  );
}
