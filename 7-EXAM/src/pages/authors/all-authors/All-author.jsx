import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useUserStore } from "../../../app/store.js";

const AllAuthor = () => {
  const [users, setUsers] = useState([]);

  const { deleteUser, authors } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fn = async () => {
      const data = await authors();
      setUsers(data);
    };
    fn();
  }, [users]);

  const onDelete = async (id) => await deleteUser(id);

  return (
    <div>
      <div className={"book-sidebar"}>
        <input style={{ padding: "10px", width: "500px", borderRadius: "8px" }} type="text" placeholder="Search author" />
        <Link to={"/authors/create"}>Create Author</Link>
      </div>

      <main style={{ width: "80%", margin: "auto" }}>
        {users?.map((user, index) => (
          <div key={index} style={{ margin: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#121212", borderRadius: "8px", padding: "20px" }}>
            <div onClick={() => navigate(`/authors/${user.id}`)}>
              <h2>{user.full_name}</h2>
              <p>{user.country}</p>
              <p>{user.birthdate}</p>
            </div>

            <img src={user.image} alt={user.full_name} style={{ width: "100px", height: "100px" }} />

            <div>
              <button onClick={() => onDelete(user.id)} style={{ padding: "10px", margin: "10px", borderRadius: "8px" }}>
                delete
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default AllAuthor;
