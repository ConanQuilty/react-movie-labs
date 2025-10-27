import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import MovieList from "../movieList"; 
import { useQuery } from "@tanstack/react-query";
import Spinner from "../spinner";
import { getActorCredits } from "../../api/tmdb-api"; 
import img from "../../images/film-poster-placeholder.png";

const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};

const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["actorCredits", { id: actor.id }],
    queryFn: getActorCredits,
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data ? data.cast : [];
  console.log('Actors movies: ', movies)
  return (
    <>
      <Grid container spacing={3}>
        <Grid item>
          <Avatar
            alt={actor.name}
            src={
              actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`: img
            }
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              boxShadow: 2,
            }}
            variant="square"
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h4" component="h2">
            {actor.name}
          </Typography>

          <Paper component="ul" sx={{ ...root }}>
            <li>
              <Chip
                label={`Known for: ${actor.known_for_department}`}
                sx={{ ...chip }}
                color="primary"
              />
            </li>
            {actor.place_of_birth && (
              <li>
                <Chip label={`From: ${actor.place_of_birth}`} sx={{ ...chip }} />
              </li>
            )}
            {actor.birthday && (
              <li>
                <Chip label={`Born: ${actor.birthday}`} sx={{ ...chip }} />
              </li>
            )}
            {actor.deathday && (
              <li>
                <Chip label={`Died: ${actor.deathday}`} sx={{ ...chip }} />
              </li>
            )}
          </Paper>

          <Typography variant="h5" sx={{ marginTop: 2 }}>
            Biography
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {actor.biography || "No biography available."}
          </Typography>
        </Grid>
      </Grid>

      {movies.length > 0 && (
        <>
          <Typography variant="h5" sx={{ marginTop: 4 }}>
            Featured In
          </Typography>
          
          <MovieList
            movies={movies}
            action={() => null}/>
        </>
      )}
    </>
  );
};

export default ActorDetails;
