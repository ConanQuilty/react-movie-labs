import React from "react";
import { useParams } from 'react-router';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieCast } from '../api/tmdb-api'
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner'
// import useMovie from "../hooks/useMovie";   Redundant
import MovieCast from "../components/movieCast";


const MoviePage = (props) => {
  const { id } = useParams();
    const { data: movie, errorMovie, isPendingMovie, isErrorMovie  } = useQuery({
    queryKey: ['movie', {id: id}],
    queryFn: getMovie,
  })

  if (isPendingMovie) {
    return <Spinner />;
  }

  if (isErrorMovie) {
    return <h1>{errorMovie.message}</h1>;
  }

  const {data: credits, errorCredits, isPendingCredits, isErrorCredits } = useQuery({
    queryKey: ["cast", {id: id}],
    queryFn: getMovieCast,
  })
  
  console.log("Credits data:", credits);


  if(isPendingCredits){
    return <Spinner />
  }

  if (isErrorCredits) {
    return <h1>{errorCredits.message}</h1>
  }

  const cast = credits?.cast?.slice(0, 10) || [] ;

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <MovieCast cast={cast} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;

