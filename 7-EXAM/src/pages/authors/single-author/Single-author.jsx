import { useUserStore } from "../../../app/store.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Single-author.css";

const SingleAuthor = () => {
  const [user, setUser] = useState({});

  const { detail } = useParams();
  const { userDetail } = useUserStore();

  useEffect(() => {
    const fn = async () => {
      const data = await userDetail(detail);
      setUser(data);
    };
    fn();
  }, [detail, userDetail, user]);

  return (
    <div className="singleauthor">
      <h1 style={{ textAlign: "center", padding: "20px" }}>{user.full_name}</h1>

      <div>
        <p>{user.country}</p>
        <p>{user.id}</p>
        <p>{user.birthdate}</p>
        <img src={user.image} alt={user.full_name} width={100} height={100} />

        <div style={{ width: "80%", margin: "auto" }}>
          <p>Books</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {user?.books?.map((book, index) => (
              <div key={index}>
                <p key={book.id}>{book.name}</p>
                <img src={book.image} alt={book.name} width={100} height={100} />
                <p>{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAuthor;
