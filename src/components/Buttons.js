import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";
import { popup } from "./Popup";

const Buttons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popuptype, setpopuptype] = useState("");

  const togglePopup = (name) => {
    if (isOpen) {
      setIsOpen(!isOpen);
      setpopuptype("");
    } else {
      setIsOpen(!isOpen);
      setpopuptype(name);
    }
  };

  return (
    <div className="button">
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button onClick={togglePopup}>PREDICT</Button>
        <Button>ANALYTICS VIEW</Button>
        <Button onClick={() => togglePopup("ADVANCESEARCH")}>
          ADVANCE SEARCH
        </Button>
      </ButtonGroup>
      <div style={{ display: "flex" }}>
        <TextField id="outlined-basic" label="Search" variant="outlined" />
        <Button size="small" variant="text">
          🔍
        </Button>
      </div>

      {popup(isOpen, togglePopup, popuptype)}

      <ButtonGroup
        className="button-right"
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => togglePopup("ADD")}>ADD</Button>
        <Button onClick={() => togglePopup("EDIT")}>EDIT</Button>
        <Button onClick={() => togglePopup("DELETE")}>DELETE</Button>
      </ButtonGroup>
    </div>
  );
};

export default Buttons;
