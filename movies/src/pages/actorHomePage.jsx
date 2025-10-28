import React from "react";
import { getPopularActors } from "../api/tmdb-api";
import ActorList from "../components/actorList";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'


const ActorHomePage = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['popularActors'],
    queryFn: getPopularActors,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const actors = data.results;

    return (
      <ActorList
        actors={actors}
      />
  );
};
export default ActorHomePage;
