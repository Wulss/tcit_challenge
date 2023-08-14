import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPosts, deletePost } from "../store/postsSlice";
import PostsForm from "./PostsForm";
import "./PostsList.css";

export default function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [filter, setFilter] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const handleDelete = async (id) => {
    await dispatch(deletePost(id));
  };

  const handleFilter = () => {
    const filteredPosts = posts.filter((post) =>
      post.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPosts(filteredPosts);
  };

  return (
    <div className="posts-container">
      <div className="filter-container">
        <input
          className="filter-input"
          type="text"
          placeholder="Filtrar por nombre"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button className="filter-button" onClick={() => handleFilter()}>
          Buscar
        </button>
      </div>
      <table className="posts-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.name}</td>
              <td>{post.description}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(post.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="create-form-container">
        <PostsForm />
      </div>
    </div>
  );
}
