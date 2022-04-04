import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";

const DeletePopup = ({ togglePopup }) => {
  return (
    <div className="popup-box">
      <div style={{ height: "40vh", width: "50%" }} className="box">
        <h1>DELETE</h1>
        
        <div className="delete-pop"><h1>Delete Records?</h1></div>
        <div className="delete-pop"><h2>Are you sure you want to delete the record(s)?</h2></div>
        


          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button type="submit">DELETE</Button>
            <Button onClick={togglePopup}>CANCEL</Button>
          </ButtonGroup>
        
      </div>
    </div>
  );
};

export default DeletePopup;
