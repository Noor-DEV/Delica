import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Form, Input } from "./StyledComps";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [search, setSearch] = useState("");
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    nav(`/searched/${search}`);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search...."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <FaSearch />
    </Form>
  );
};

export default Search;
