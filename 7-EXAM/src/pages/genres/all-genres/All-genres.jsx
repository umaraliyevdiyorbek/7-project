import { Link } from "react-router-dom";

const AllGenres = () => {
  return (
    <div>
      <div className={"book-sidebar"}>
        <input style={{ padding: "10px", width: "500px", borderRadius: "8px" }} type="text" placeholder="Search genre" />
        <Link to={"/genres/create"}>Create Genre</Link>
      </div>

      <main>Main Genres</main>
    </div>
  );
};

export default AllGenres;
