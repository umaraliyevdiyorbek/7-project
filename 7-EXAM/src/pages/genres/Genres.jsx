import { Outlet } from "react-router-dom";

const Genres = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px" }}>Genres</h1>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Genres;
