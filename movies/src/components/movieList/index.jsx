import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";

const MovieList = ({ movies, action }) => {
  return (
    <Grid container spacing={2}>
      {movies.map((m) => (
        <Grid item key={m.id} sx={{ padding: "10px" }}>
          <Movie movie={m} action={action} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
