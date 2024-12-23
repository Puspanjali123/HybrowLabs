import React, { useState } from "react";
import axios from "axios";

const RandomUserTable = () => {
  const [users, setUsers] = useState([]);

  const fetchRandomUser = async () => {
    try {
      const randomId = Math.floor(Math.random() * 10) + 1;
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${randomId}/`
      );
      const user = {
        id: response.id,
        name: response.title,
      };
      setUsers((prevUsers) => [...prevUsers, user]);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Random User Table</h1>
      <button onClick={fetchRandomUser} style={{ marginBottom: "10px" }}>
        Add Record
      </button>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Name</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No records available
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.title}</td>

                <td>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RandomUserTable;
