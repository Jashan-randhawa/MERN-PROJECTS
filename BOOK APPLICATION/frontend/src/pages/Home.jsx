import React, { useState, useEffect } from "react";
import axios from "axios";
import Spin from "../components/spin";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Bookstable from "../components/home/Bookstable";
import Bookscards from "../components/home/bookscards";

export const Home = () => {
  const [books, setbooks] = useState([]);
  const [loading, setloading] = useState(false);
  const [showtype, setshowtype] = useState("table");
  const server = "http://localhost:8000/books";

  useEffect(() => {
    setloading(true);
    fetch(`${server}`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        return response.data;
        /*  console.log(response.data);
        setbooks(response.data);
        setloading(false); */
      })
      .then((data) => {
        setbooks(data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center  ">
        <button
          className=" bg-sky-300 hover:bg-sky-600 m-4 px-4 py-1 rounded-lg "
          onClick={() => setshowtype("table")}
        >
          Table
        </button>
        <button
          className=" bg-sky-300 hover:bg-sky-600 m-4 px-4 py-1 rounded-lg "
          onClick={() => setshowtype("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between text-center ">
        <h1 className="text-3xl my-8 mx-auto"> BOOK LISTS</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 my-8 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spin />
      ) : showtype === "table" ? (
        <Bookstable books={books} />
      ) : (
        <Bookscards books={books} />
      )}
    </div>
  );
};
