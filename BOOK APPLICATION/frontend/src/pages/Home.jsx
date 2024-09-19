import React, { useState, useEffect } from "react";
import axios from "axios";
import Spin from "../components/spin";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

export const Home = () => {
  const [books, setbooks] = useState([]);
  const [loading, setloading] = useState(false);
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
      <div className="flex justify-between text-center ">
        <h1 className="text-3xl my-8 mx-auto"> BOOK LISTS</h1>
      </div>
      {loading ? (
        <Spin />
      ) : (
        <table className=" w-full border-separate border-spacing-2 ">
          <tr>
            <th className="border border-slate-600 rounded-md ">No</th>
            <th className="border border-slate-600 rounded-md ">Title</th>
            <th className="border border-slate-600 rounded-md ">Author</th>
            <th className="border border-slate-600 rounded-md ">
              Publish Year
            </th>
            <th className="border border-slate-600 rounded-md ">operation</th>
          </tr>
          {console.log(books)}
          {books.map((book, index) => {
            return (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-600 rounded-md ">
                  {index + 1}
                </td>
                <td className="border border-slate-600 rounded-md ">
                  {book.title}
                </td>
                <td className="border border-slate-600 rounded-md ">
                  {book.author}
                </td>
                <td className="border border-slate-600 rounded-md ">
                  {book.publishyear}
                </td>
                <td className="border border-slate-600 rounded-md ">
                  <div className=" flex justify-between  gap-x-8 ">
                    <Link to="/books/create">
                      <MdOutlineAddBox className="text-sky-800 text-4xl" />
                    </Link>
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircleFill className="text-2xl text-green-800 " />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-green-800 " />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-2xl text-green-800 " />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
};
