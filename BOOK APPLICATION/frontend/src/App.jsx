import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Showbooks } from "./pages/Showbooks";
import { Editbooks } from "./pages/Editbooks";
import { Deletebooks } from "./pages/Deletebooks";
import { Createbooks } from "./pages/Createbooks";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<Createbooks />} />
      <Route path="/books/details/:id" element={<Showbooks />} />
      <Route path="/books/edit/:id" element={<Editbooks />} />
      <Route path="/books/delete/:id" element={<Deletebooks />} />
    </Routes>
  );
};

export default App;
