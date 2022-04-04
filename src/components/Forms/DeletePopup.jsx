import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";
import Grid from '@mui/material/Grid';

const DeletePopup = ({ togglePopup }) => {
  return (
    <div className="popup-box">
      <div style={{ height: "40vh", width: "58%" }} className="box">
        <h1>DELETE</h1>
        
        <div className="delete-pop"><h1>Delete Records?</h1></div>
        <div className="delete-pop"><h2>Are you sure you want to delete the record(s)?</h2></div>
        

        <Grid 
    container
    rowSpacing={4}
    columnSpacing={{xs:1, sm:2, md:3}}
    style={{width: "1000px"}}
>
    <Grid item xs={6}>
    <div>
         <Button type="submit" variant="outlined" aria-label="outlined button group">DELETE</Button>
    </div>
    </Grid>
    <Grid item xs={6}>
    <div>
    <Button onClick={togglePopup} variant="outlined" aria-label="outlined button group">CANCEL</Button>
    </div>
    </Grid>
  </Grid>        
          
        
      </div>
    </div>
  );
};

export default DeletePopup;
