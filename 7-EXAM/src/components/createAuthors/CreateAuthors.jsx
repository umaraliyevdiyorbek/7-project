import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useUserStore } from "../../app/store";

const CreateAuthors = () => {
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("");
  const [url, setUrl] = useState("");

  const navigate = useNavigate();
  const { addAuthor } = useUserStore();

  const addedAuthor = async (e) => {
    e.preventDefault();
    const payload = { full_name: fullName, birthdate: date, country, image: url };
    await addAuthor(payload);
    navigate("/authors");
    toast.error("Something went wrong!");
  };

  return (
    <form onSubmit={addedAuthor} id="author-form" style={{ display: "flex", flexDirection: "column", gap: "20px", width: "70%", margin: "0 auto" }}>
      <input
        style={{ padding: "10px", borderRadius: "8px" }}
        onChange={(e) => setFullName(e.target.value)}
        autoComplete="current-password"
        required
        value={fullName}
        type="text"
        placeholder="Enter author fullname"
      />
      <input style={{ padding: "10px", borderRadius: "8px" }} onChange={(e) => setDate(e.target.value)} autoComplete="current-password" required value={date} type="date" placeholder="Enter birth date" />
      <input
        style={{ padding: "10px", borderRadius: "8px" }}
        autoComplete="current-password"
        required
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        type="text"
        placeholder="Enter your country"
      />
      <input style={{ padding: "10px", borderRadius: "8px" }} autoComplete="current-password" required value={url} onChange={(e) => setUrl(e.target.value)} type="url" placeholder="Enter image" />
      <button style={{ padding: "10px", borderRadius: "8px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer" }} type={"submit"} form="author-form">
        Add Author
      </button>
    </form>
  );
};

export default CreateAuthors;
