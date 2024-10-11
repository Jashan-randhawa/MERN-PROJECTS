import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu anchorEl={anchorE1}>
      <div
        style={{
          width: "10rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        voluptatem a quisquam sit autem illum. Quo, accusantium! Quo, voluptatem
        sequi?
      </div>
    </Menu>
  );
};

export default FileMenu;
