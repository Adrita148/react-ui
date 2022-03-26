import React from "react"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import  InputBase  from "@mui/material";


const Buttons = () => {
    return (
    <div className="button">
        <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>PREDICT</Button>
        <Button>ANALYTICS VIEW</Button>
        <Button>ADVANCE SEARCH</Button>
    </ButtonGroup>
       

        <ButtonGroup className="button-right" variant="outlined" aria-label="outlined primary button group" style={{float: "right"}}>
            <Button>ADD</Button>
            <Button>EDIT</Button>
            <Button>DELETE</Button>
        </ButtonGroup>     
        
    </div> 
    )
}

export default Buttons;