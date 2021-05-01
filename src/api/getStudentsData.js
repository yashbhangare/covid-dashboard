import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
require("dotenv").config();

export const GetStudentsData = () => {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: process.env.REACT_APP_GSS_KEY,
      simpleSheet: true,
    })
      .then((data) => setStudentsData(data))
      .catch((err) => console.warn(err));
  }, []);

  return studentsData;
};
