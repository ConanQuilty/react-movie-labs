import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import { getPopularActors } from "../api/tmdb-api";
import ActorList from "../components/actorList";
import FilterActorsCard from "../components/filterActorsCard";
import Header from "../components/headerMovieList";


const ActorHomePage = () => {
  const [nameFilter, setNameFilter] = useState("");

  const { data, error, isPending, isError } = useQuery({
    queryKey: ["popularActors"],
    queryFn: getPopularActors,
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const actors = data.results;

  const displayedActors = actors.filter((a) =>
    a.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const handleUserInput = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={12}>
        
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <FilterActorsCard
          nameFilter={nameFilter}
          onUserInput={handleUserInput}
        />
      </Grid>

      <Grid item xs={12} md={8} lg={9}>
        <ActorList actors={displayedActors} />
      </Grid>
    </Grid>
  );
};
export default ActorHomePage;
