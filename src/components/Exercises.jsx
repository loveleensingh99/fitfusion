import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import { exerciseOptions, fetchMyData } from "../utils/fetchData";

export default function Exercises({ exercises, setExercises, bodyPart }) {
  console.log("🚀 ~ file: Exercises.jsx:5 ~ Exercises ~ exercises:", exercises);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  // Get data for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentExercisesData = exercises.slice(startIndex, endIndex);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behaviour: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchMyData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchMyData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      console.log(
        "🚀 ~ file: Exercises.jsx:26 ~ fetchExercisesData ~ exercisesData:",
        exercisesData
      );

      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);
  return (
    <>
      <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
        <Typography variant="h4" mb="46px">
          Showing Results
        </Typography>

        <Stack
          direction="row"
          sx={{ gap: { lg: "110px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {currentExercisesData.map((exercises) => (
            <ExerciseCard key={exercises.name} exercises={exercises} />
          ))}
        </Stack>

        <Stack mt="100px" alignItems={"center"}>
          {exercises.length > 9 && (
            <Pagination
              count={Math.ceil(exercises.length / itemsPerPage)}
              page={currentPage}
              onChange={paginate}
              shape="rounded"
              default="1"
            />
          )}
        </Stack>
      </Box>
    </>
  );
}
