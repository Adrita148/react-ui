import { useState } from "react";
import axios from "axios";

let Getapi = ({ setData }) => {
  const url = "";
  const [newjson, setnewjson] = useState({});
  axios
    .get(url)
    .then((res) => {
      setnewjson(res.body);
      console.log(newjson);
    })
    .then(() => {
      setData("");
    });
};

export default Getapi;
