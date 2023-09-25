import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Userlist = () => {
  const [users, setUsers] = useState([]);

  function getUserData() {
    axios
      .get("https://62e4bff620afdf238d717a88.mockapi.io/records/users")
      .then(function (response) {
        // handle success
        console.log(response);
        setUsers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  const onDeleteHandler = (userid) => {
    axios
      .delete(
        "https://62e4bff620afdf238d717a88.mockapi.io/records/users/" + userid
      )
      .then((res) => {
        console.log(res);
        getUserData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>User List</h1>
      {users.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, ind) => {
                return (
                  <tr key={ind}>
                    <td>{++ind}</td>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user?.password}</td>
                    <td>{user?.contact}</td>
                    <td>
                      <button>
                        <Link to={"/edit-user/"+user.id}>Edit</Link>
                      </button>
                      <button onClick={() => onDeleteHandler(user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Userlist;
