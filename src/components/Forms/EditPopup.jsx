import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";
import Grid from '@mui/material/Grid';

const EditPopup = ({ togglePopup }) => {
  return (
  <div className="popup-box">
   <div style={{ height: "25vh", width: "60%" }} className="box">
      <h1>ADD</h1>
  <Grid 
  container
  rowSpacing={1}
  columnSpacing={{xs:1, sm:2, md:3}}
  style={{width: "1000px"}}
>
  <Grid item xs={6}>
  <div>
  <TextField
          id="invoice_curr"
          label="Invoice Currency"
          variant="outlined"
          className="customer"
          fullWidth />
  </div>
  </Grid>
  <Grid item xs={6}>
  <div>
  <TextField
          id="payment_terms"
          label="Customer Payment Terms"
          variant="outlined"
          className="customer"
          fullWidth
           />
  </div>
  </Grid>
  <Grid item xs={6}>
  <div>
    <Button variant="outlined" onClick={togglePopup}>EDIT</Button>
  </div> 
  </Grid>
  
  <Grid item xs={6}>
  <div>
    <Button variant="outlined" onClick={togglePopup}>CANCEL</Button>
  </div> 
  </Grid>
</Grid>

   </div>
  </div>
  );
};

export default EditPopup;
