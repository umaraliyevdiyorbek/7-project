import { Outlet } from "react-router-dom";

const Books = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px" }}>Books</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Books;
