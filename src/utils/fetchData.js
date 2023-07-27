import React from "react";

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cc68ed001dmsh6025e82f2ac607fp107b57jsnfe1a765fc203",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchMyData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log("API KEY", process.env.REACT_APP_RAPID_API_KEY);
  return data;
};
