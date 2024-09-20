import React, { useState } from "react";
import Backbutton from "../components/Backbutton";
import Spin from "../components/spin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export const Createbooks = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [publishyear, setpublishyear] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handlesavebook = () => {
    const data = {
      title,
      author,
      publishyear,
    };
    setloading(true);
    axios
      .post("http://localhost:8000/books", data)
      .then(() => {
        setloading(false);
        enqueueSnackbar("Book created sucessfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
        enqueueSnackbar("Error", { variant: "error" });
        alert("an error have been occuered");
      });
  };

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className=" text-3xl my-4 ">Create Book</h1>
      {loading ? <Spin /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className=" my-4">
          <label className=" text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full "
          />
        </div>
        <div className="  my-4">
          <label className=" text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full "
          />
        </div>
        <div className=" my-4">
          <label className=" text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishyear}
            onChange={(e) => setpublishyear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full "
          />
        </div>
        <button className=" p-2 bg-sky-300 m-8" onClick={handlesavebook}>
          Save
        </button>
      </div>
    </div>
  );
};
