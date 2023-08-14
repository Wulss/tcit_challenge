import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../store/postsSlice";

export default function PostsForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ name, description }));
    setName("");
    setDescription("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e)}>Crear</button>
    </div>
  );
}
