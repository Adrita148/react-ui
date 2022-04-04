import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";
import Grid from '@mui/material/Grid';

function EditPopup({ togglePopup }) {
  return (
    <div className="popup-box">
      <div style={{ height: "30vh", width: "40%" }} className="box">
        <h1>EDIT</h1>
        <form action="submit">
          <div>
            <TextField
              id="outlined-password-input"
              label="Invoice Currency"
              className="invoice" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <TextField
              id="outlined-basic"
              label="Customer Payment Terms"
              variant="outlined"
              className="customer" />
          </div>
        
          <ButtonGroup >
        
           <Button  variant="outlined" aria-label="outlined button group"  type="submit" className="edit-popup">EDIT</Button>
          
            <Button  variant="outlined" aria-label="outlined button group"  onClick={togglePopup} >CANCEL</Button>

          </ButtonGroup>
        
        </form>
      </div>
    </div>
  );
}

export default EditPopup;
