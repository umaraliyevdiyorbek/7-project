// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// import { useUserStore } from "../../../app/store.js";



// const AllBooks = () => {
//   const [books, setBook] = useState([]);

//   const  { deleteUser, books } = useUserStore();
//   const navigate = useNavigate();
  
//   useEffect(() => {
//     const fn = async () => {
//       const data = await books();
//       setBook(data);
//     };
//     fn();
//   }, [books]);

//   const onDelete = async (id) => await deleteUser(id);

//   return (
//     <div>
//       <div className={"book-sidebar"}>
//         <input style={{ padding: "10px", width: "500px", borderRadius: "8px" }} type="text" placeholder="Search book" />
//         <Link to={"/books/create"}>Create Book</Link>
//       </div>

//       <main style={{ width: "80%", margin: "auto" }}>
//         {books?.map((book, index) => (
//           <div key={index} style={{ margin: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#121212", borderRadius: "8px", padding: "20px" }}>
//             <div onClick={() => navigate(`/authors/${user.id}`)}>
//               <h2>{book.name}</h2>
//               <p>{book.author_id}</p>
//               <p>{book.price}</p>
//               <p>{book.code}</p>
//               <p>{book.description}</p>
//             </div>

//             <img src={book.image} alt={book.name} style={{ width: "100px", height: "100px" }} />

//             <div>
//               <button onClick={() => onDelete(book.id)} style={{ padding: "10px", margin: "10px", borderRadius: "8px" }}>
//                 delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// };

// export default AllBooks;

// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// import { useUserStore } from "../../../app/store.js";

// const AllAuthor = () => {
//   const [users, setUsers] = useState([]);

//   const { deleteUser, authors } = useUserStore();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fn = async () => {
//       const data = await authors();
//       setUsers(data);
//     };
//     fn();
//   }, [users]);

//   const onDelete = async (id) => await deleteUser(id);

//   return (
//     <div>
//       <div className={"book-sidebar"}>
//         <input style={{ padding: "10px", width: "500px", borderRadius: "8px" }} type="text" placeholder="Search author" />
//         <Link to={"/authors/create"}>Create Author</Link>
//       </div>


//     </div>
//   );
// };

// export default AllAuthor;


import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useUserStore } from "../../../app/store.js";

const AllBooks = () => {
  const [booksData, setBooksData] = useState([]); // Renamed to avoid naming conflict
  const { deleteUser, getBooks } = useUserStore(); // Renamed to avoid naming conflict
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBooks(); // Changed to use the renamed function
      setBooksData(data);
    };

    fetchData();
  }, [getBooks]);

  const onDelete = async (id) => {
    await deleteUser(id);
    // You may want to refetch the data after deletion
    fetchData();
  };

  return (
    <div>
      <div className={"book-sidebar"}>
        <input style={{ padding: "10px", width: "500px", borderRadius: "8px" }} type="text" placeholder="Search book" />
        <Link to={"/books/create"}>Create Book</Link>
      </div>

      <main style={{ width: "80%", margin: "auto" }}>
        {booksData?.map((book, index) => (
          <div key={index} style={{ margin: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#121212", borderRadius: "8px", padding: "20px" }}>
            <div onClick={() => navigate(`/authors/${user.id}`)}>
              <h2>{book.name}</h2>
              <p>{book.author_id}</p>
              <p>{book.price}</p>
              <p>{book.code}</p>
              <p>{book.description}</p>
            </div>

            <img src={book.image} alt={book.name} style={{ width: "100px", height: "100px" }} />

            <div>
              <button onClick={() => onDelete(book.id)} style={{ padding: "10px", margin: "10px", borderRadius: "8px" }}>
                delete
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default AllBooks;