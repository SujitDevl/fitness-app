import React from "react";
import { Box } from "@mui/material";
import { ScrollMenu,  VisibilityContext } from "react-horizontal-scrolling-menu";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart}) => {
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
        >
          <BodyPart item={item} bodyPart={bodyPart}  setBodyPart={setBodyPart}/>
        </Box>
      ))}
    </div>
  );
}; 

export default HorizontalScrollbar;
