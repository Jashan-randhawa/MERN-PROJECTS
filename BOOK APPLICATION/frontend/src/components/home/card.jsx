import React from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiShow, BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./Bookmodal";

const Card = ({ items, books }) => {
  const [showmodal, setshowmodal] = useState(false);

  return (
    <div
      className=" border-2 border-sky-500 px-4 py-2 rounded-lg m-4 relative hover: shadow-lg"
      key={items._id}
    >
      <h2 className=" absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {items.publishyear}
      </h2>
      <h4 className=" mt-8 bg-sky-300">{items._id}</h4>
      <div className=" flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className=" text-red-300 text-2xl" />
        <h2 className=" my-1">{items.title}</h2>
      </div>
      <div className=" flex justify-start items-center gap-x-2">
        <BiSolidUserCircle className=" text-red-300 text-2xl" />
        <h2 className=" my-1">{items.author}</h2>
      </div>
      <div className=" flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-2xl text-green-800 hover:text-black cursor-pointer"
          onClick={() => setshowmodal(true)}
        />
        <Link to={`/books/details/${books._id}`}>
          <BsInfoCircleFill className="text-2xl text-green-800 " />
        </Link>
        <Link to={`/books/edit/${books._id}`}>
          <AiOutlineEdit className="text-2xl text-green-800 " />
        </Link>
        <Link to={`/books/delete/${books._id}`}>
          <MdOutlineDelete className="text-2xl text-green-800 " />
        </Link>
      </div>
      {showmodal && (
        <BookModal book={items} onClose={() => setshowmodal(false)} />
      )}
    </div>
  );
};

export default Card;
