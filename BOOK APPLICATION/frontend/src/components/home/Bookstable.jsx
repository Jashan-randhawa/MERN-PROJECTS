import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Bookstable = ({ books }) => {
  return (
    <table className=" w-full border-separate border-spacing-2 ">
      <tr>
        <th className="border border-slate-600 rounded-md ">No</th>
        <th className="border border-slate-600 rounded-md ">Title</th>
        <th className="border border-slate-600 rounded-md ">Author</th>
        <th className="border border-slate-600 rounded-md ">Publish Year</th>
        <th className="border border-slate-600 rounded-md ">operation</th>
      </tr>
      {console.log(books)}
      {books.map((book, index) => {
        return (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-600 rounded-md ">{index + 1}</td>
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
  );
};
export default Bookstable;
