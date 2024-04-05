import "./App.css";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout.jsx";
import Authors from "./pages/authors/Authors.jsx";
import Books from "./pages/books/Books.jsx";
import Genres from "./pages/genres/Genres.jsx";
import CreateBook from "./components/createBooks/CreateBooks";
import SingleBook from "./pages/books/single-book/Single-book.jsx";
import AllBooks from "./pages/books/all-books/All-books.jsx";
import AllAuthor from "./pages/authors/all-authors/All-author.jsx";
import CreateAuthor from "./pages/authors/create-author/Create-author.jsx";
import SingleAuthor from "./pages/authors/single-author/Single-author.jsx";
import AllGenres from "./pages/genres/all-genres/All-genres.jsx";
import CreateGenre from "./components/createGenres/Genres";
import SingleGenre from "./pages/genres/single-genre/Single-genre.jsx";

function App() {
  return (
    <Routes path="/" element={<Layout />}>
      <Route index element={<SignUp />} />
      <Route path="login" element={<Login />} />

      <Route path="/" element={<Layout />}>
        <Route path="authors" element={<Authors />}>
          <Route index element={<AllAuthor />} />
          <Route path="create" element={<CreateAuthor />} />
          <Route path=":detail" element={<SingleAuthor />} />
        </Route>

        <Route path="books" element={<Books />}>
          <Route index element={<AllBooks />} />
          <Route path="create" element={<CreateBook />} />
          <Route path=":detail" element={<SingleBook />} />
        </Route>

        <Route path="genres" element={<Genres />}>
          <Route index element={<AllGenres />} />
          <Route path="create" element={<CreateGenre />} />
          <Route path=":detail" element={<SingleGenre />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
