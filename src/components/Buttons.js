import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";
import Popup from "./Popup";
// import  InputBase  from "@mui/material";

const Buttons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const popup = (isOpen, togglePopup) => {
    return (
      isOpen && (
        <Popup
          content={
            <>
              <h1>Popup</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button onClick={togglePopup}>Test button</button>
            </>
          }
          handleClose={togglePopup}
        />
      )
    );
  };

  return (
    <div className="button">
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button onClick={togglePopup}>PREDICT</Button>
        <Button>ANALYTICS VIEW</Button>
        <Button onClick={togglePopup}>ADVANCE SEARCH</Button>
      </ButtonGroup>
      <div style={{ display: "flex" }}>
        <TextField id="outlined-basic" label="Search" variant="outlined" />
        <Button size="small" variant="text">
          🔍
        </Button>
      </div>

      {popup(isOpen, togglePopup)}

      <ButtonGroup
        className="button-right"
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Button onClick={togglePopup}>ADD</Button>
        <Button onClick={togglePopup}>EDIT</Button>
        <Button>DELETE</Button>
      </ButtonGroup>
    </div>
  );
};

export default Buttons;
