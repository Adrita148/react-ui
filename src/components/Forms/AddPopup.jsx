// import React from "react";
// import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import { TextField } from "@mui/material";

// const AddPopup = ({ togglePopup }) => {
//   return (
//     <div className="popup-box">
//       <div style={{}} className="box">
//         <h1>ADD</h1>
//         <form action="submit">
//           <TextField
//             id="outlined-basic"
//             label="Invoice Currency"
//             variant="outlined"
//           />
//           <TextField
//             id="outlined-basic"
//             label="Customer Payment Terms"
//             variant="outlined"
//           />
//           <ButtonGroup variant="outlined" aria-label="outlined button group">
//             <Button type="submit">ADD</Button>
//             <Button onClick={togglePopup}>CANCEL</Button>
//           </ButtonGroup>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddPopup;

import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";
import Grid from '@mui/material/Grid';


const AddPopup = ({ togglePopup }) => {
    return (
    <div className="popup-box">
     <div style={{ height: "55vh", width: "60%" }} className="box">
        <h1>PREDICT</h1>
    <Grid 
    container
    rowSpacing={1}
    columnSpacing={{xs:1, sm:2, md:3}}
    style={{width: "1000px"}}
>
    <Grid item xs={3}>
    <div>
    <TextField
            id="business_code"
            label="Business Code"
            variant="outlined"
            className="customer" />
    </div>
    </Grid>
    <Grid item xs={3}>
    <div>
    <TextField
            id="customer_number"
            label="Customer Number"
            variant="outlined"
            className="customer"
             />
    </div>
    </Grid>
    <Grid item xs={3}>
    <div>
    <TextField
            id="clear_date"
            label="Clear Date"
            variant="outlined"
            fullWidth
            className="customer"
            type="date"
            />
    </div>
    </Grid> 
    <Grid item xs={3}>
    <div>
    <TextField
            id="business_year"
            label="Business Year"
            variant="outlined"
            className="customer" />
    </div>
    </Grid>
    <Grid item xs={3}>
    <div>
    <TextField
            id="document_id"
            label="Document ID"
            variant="outlined"
            className="customer" />
    </div>
    </Grid>
    <Grid item xs={3}>
    <div>
    <TextField
            id="posting_date"
            label=" Posting Date "
            fullWidth
            variant="outlined"
            className="customer"
            type="date" />
    </div>
    </Grid>
    <Grid item xs={3}>
    <div>
    <TextField
            id="Document_date"
            label="Document_Create_Date"
            fullWidth
            variant="outlined"
            className="customer"
            type="date" />
    </div>
    </Grid>
    <Grid item xs={3}>
    <div>
    <TextField
            id="due_date"
            label="Due Date"
            fullWidth
            className="customer"
            variant="filled"
            type="date" />
    </div>
    </Grid>  
    <Grid item xs={3}>
    <div>
    <TextField
            id="invoice"
            label="Invoice_Currency"
            fullWidth
            className="customer"
            variant="filled"
            />
    </div>
    </Grid>  
    <Grid item xs={3}>
    <div>
    <TextField
            id="type_doc"
            label="DocumentType"
            fullWidth
            className="customer"
            variant="filled"
            />
    </div>
    </Grid>  
    <Grid item xs={3}>
    <div>
    <TextField
            id="post_id"
            label="Posting Id"
            fullWidth
            className="customer"
            variant="filled"
            />
    </div>
    </Grid>  
    <Grid item xs={3}>
    <div>
    <TextField
            id="open_amount"
            label="Total Open Amount"
            fullWidth
            className="customer"
            variant="filled"
            />
    </div>
    </Grid> 
    <Grid item xs={3}>
    <div>
    <TextField
            id="baseline_date"
            label="Baseline Create Date"
            fullWidth
            className="customer"
            variant="filled"
            type="date"
            />
    </div>
    </Grid> 
    <Grid item xs={3}>
    <div>
    <TextField
            id="payment_terms"
            label="Customer Payment Terms"
            fullWidth
            className="customer"
            variant="filled"
            />
    </div>
    </Grid> 
    <Grid item xs={3}>
    <div>
    <TextField
            id="invoice_id"
            label="Invoice Id"
            fullWidth
            className="customer"
            variant="filled"
            />
    </div>
    </Grid> 
</Grid>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button type="submit">ADD</Button>
            <Button onClick={togglePopup}>CANCEL</Button>
        </ButtonGroup>
        
     </div>
    </div>
    );
};

export default AddPopup;
