import React, { useState } from "react";
import useStyles from "./styles";
import { Grid } from "@mui/material";

import { Movie } from "..";

// const MovieList = ({ movies }) => {
//   const classes = useStyles();
//   return <div>hi</div>;
// };

// export default MovieList;

const MovieList = ({ movies }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
