
import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMoviePage";
import ActorDetails from "../components/actorDetails";
import { getActor } from "../api/tmdb-api";

const ActorPage = () => {
  const { id } = useParams();

  const { data: actor, isPending, isError, error } = useQuery({
    queryKey: ["actor", { id }],
    queryFn: getActor,
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  return actor ? <ActorDetails actor={actor} /> : <p>No actor data.</p>;
};

export default ActorPage;
