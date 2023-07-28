import React from "react";

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b6047d9db0msh9c20ac59edcf3e3p1ae157jsnd9bcac37374b",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchMyData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log("API KEY", process.env.REACT_APP_RAPID_API_KEY);
  return data;
};

export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "b6047d9db0msh9c20ac59edcf3e3p1ae157jsnd9bcac37374b",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
