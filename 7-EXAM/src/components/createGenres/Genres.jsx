import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../app/store";

const Genres = () => {
  const [name, setName] = useState("");

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
        onChange={e => setName(e.target.value)}
        autoComplete="current-password"
        required
        value={name}
        type="text"
        placeholder="Enter genre name"
      />
      {/* <input
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
      /> */}
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
        Add Genre
      </button>
    </form>
  );
};

export default Genres;
