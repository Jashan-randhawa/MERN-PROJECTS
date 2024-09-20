import React, { useState } from "react";
import Backbutton from "../components/Backbutton";
import Spin from "../components/spin";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

export const Deletebooks = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handledeletebook = () => {
    setloading(true);
    axios
      .delete(`http://localhost:8000/books/${id}`)
      .then((res) => {
        setloading(false);
        enqueueSnackbar("error", { variant: "error" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
        enqueueSnackbar("Deleted sucessfully", { variant: "success" });
        navigate("/");
      });
  };

  return (
    <div className=" p-4">
      <Backbutton />
      <h1 className=" text-3xl my-4">Delete Book</h1>
      {loading ? <Spin /> : ""}
      <div className=" flex flex-col border-2 border-sky-400 rounded-xl x-[600px] p-8 mx-auto">
        <h3 className=" text-2xl">
          Are You Sure You Wnat To Delete This Book?
        </h3>
        <button
          className=" p-4 bg-red-600 text-white m-8 w-full"
          onClick={handledeletebook}
        >
          yes delete it
        </button>
      </div>
    </div>
  );
};
