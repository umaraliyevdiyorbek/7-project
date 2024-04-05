// import { useEffect } from "react";
// import { useBookStore } from "./bookStore";

// const CreateBooks = () => {
//   const { books, addBook, updateBook, deleteBook, fetchBooks } = useBookStore();

//   useEffect(() => {
//     fetchBooks();
//   }, [fetchBooks]);

//   const handleAddBook = (book) => {
//     addBook(book);
//   };

//   const handleUpdateBook = (bookId, updatedBookData) => {
//     updateBook(bookId, updatedBookData);
//   };

//   const handleDeleteBook = (bookId) => {
//     deleteBook(bookId);
//   };

//   return (
//     <div>
//       <h1>Books</h1>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>
//             {book.title} by {book.author}
//             <button onClick={() => handleUpdateBook(book.id, { title: "Updated Title" })}>Update</button>
//             <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => handleAddBook({ id: books.length + 1, title: "New Book", author: "New Author" })}>Add Book</button>
//     </div>
//   );
// };

// export default CreateBooks;

// import { useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// import { useUserStore } from "../../app/store";

// const CreateAuthors = () => {
//   const [fullName, setFullName] = useState("");
//   const [date, setDate] = useState("");
//   const [country, setCountry] = useState("");
//   const [url, setUrl] = useState("");

//   const navigate = useNavigate();
//   const { addAuthor } = useUserStore();

//   const addedAuthor = async (e) => {
//     e.preventDefault();
//     const payload = { full_name: fullName, birthdate: date, country, image: url };
//     await addAuthor(payload);
//     navigate("/authors");
//     toast.error("Something went wrong!");
//   };

//   return (
//     <form onSubmit={addedAuthor} id="author-form" style={{ display: "flex", flexDirection: "column", gap: "20px", width: "70%", margin: "0 auto" }}>
//       <input
//         style={{ padding: "10px", borderRadius: "8px" }}
//         onChange={(e) => setFullName(e.target.value)}
//         autoComplete="current-password"
//         required
//         value={fullName}
//         type="text"
//         placeholder="Enter author fullname"
//       />
//       <input style={{ padding: "10px", borderRadius: "8px" }} onChange={(e) => setDate(e.target.value)} autoComplete="current-password" required value={date} type="date" placeholder="Enter birth date" />
//       <input
//         style={{ padding: "10px", borderRadius: "8px" }}
//         autoComplete="current-password"
//         required
//         value={country}
//         onChange={(e) => setCountry(e.target.value)}
//         type="text"
//         placeholder="Enter your country"
//       />
//       <input style={{ padding: "10px", borderRadius: "8px" }} autoComplete="current-password" required value={url} onChange={(e) => setUrl(e.target.value)} type="url" placeholder="Enter image" />
//       <button style={{ padding: "10px", borderRadius: "8px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer" }} type={"submit"} form="author-form">
//         Add Author
//       </button>
//     </form>
//   );
// };

// export default CreateAuthors;

import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../app/store";

const CreateAuthors = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const { addAuthor } = useUserStore();

  const handleAddAuthor = async e => {
    e.preventDefault();

    const payload = {
      title: title,
      author: author,
      price: parseFloat(price),
      description: description,
      image: image
    };

    try {
      await addAuthor(payload);
      navigate("/authors");
      toast.success("Author added successfully!");
    } catch (error) {
      console.error("Error adding author:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleAddAuthor}
      id="author-form"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "70%",
        margin: "0 auto"
      }}
    >
      <input
        style={{ padding: "10px", borderRadius: "8px" }}
        onChange={e => setTitle(e.target.value)}
        autoComplete="current-password"
        required
        value={title}
        type="text"
        placeholder="Enter book title"
      />
      <input
        style={{ padding: "10px", borderRadius: "8px" }}
        autoComplete="current-password"
        required
        value={author}
        onChange={e => setAuthor(e.target.value)}
        type="text"
        placeholder="Enter book author"
      />
      <input
        style={{ padding: "10px", borderRadius: "8px" }}
        autoComplete="current-password"
        required
        value={price}
        onChange={e => setPrice(e.target.value)}
        type="text"
        placeholder="Enter book price"
      />
      <input
        style={{ padding: "10px", borderRadius: "8px" }}
        autoComplete="current-password"
        required
        value={description}
        onChange={e => setDescription(e.target.value)}
        type="text"
        placeholder="Enter book description"
      />
      <input
        style={{ padding: "10px", borderRadius: "8px" }}
        autoComplete="current-password"
        required
        value={image}
        onChange={e => setImage(e.target.value)}
        type="url"
        placeholder="Enter book image URL"
      />
      <button
        style={{
          padding: "10px",
          borderRadius: "8px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
        type={"submit"}
        form="author-form"
      >
        Add Book
      </button>
    </form>
  );
};

export default CreateAuthors;
