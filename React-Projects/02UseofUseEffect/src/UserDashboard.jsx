import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source(); // Create a cancel token for axios

    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/rahul810050', {
          cancelToken: source.token, // Attach the cancel token to the request
        });
        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err.message);
        } else {
          setError(err);
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to cancel ongoing request
    return () => {
      source.cancel('Operation canceled by the user.');
    };
  }, []); // Empty dependency array ensures this runs only once after initial render

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>User Dashboard</h1>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Follower: {userData.followers}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <p>Joined: {new Date(userData.created_at).toLocaleDateString()}</p>
          {/* Other user info */}
        </div>
      ) : (
        <div>No user data available</div>
      )}
    </div>
  );
};

export default UserDashboard;
