import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";

const DeletePopup = ({ togglePopup }) => {
  return (
    <div className="popup-box">
      <div style={{ height: "30vh", width: "50%" }} className="box">
        <h1>DELETE</h1>
        <form action="submit">
          <TextField
            id="outlined-basic"
            label="Invoice Currency"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Customer Payment Terms"
            variant="outlined"
          />
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button type="submit">DELETE</Button>
            <Button onClick={togglePopup}>CANCEL</Button>
          </ButtonGroup>
        </form>
      </div>
    </div>
  );
};

export default DeletePopup;
