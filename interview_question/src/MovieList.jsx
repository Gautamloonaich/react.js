import React from 'react';
import MovieCard from './MovieCard';
import Loader from './Loader';

const MovieList = ({ movies, loading, error, hasSearched }) => {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-center text-red-500 text-xl">{error}</p>;
  }

  if (hasSearched && movies.length === 0) {
    return <p className="text-center text-slate-500 dark:text-slate-400 text-xl">No movies found. Try a different search term.</p>;
  }

  if (!hasSearched) {
      return <p className="text-center text-slate-500 dark:text-slate-400 text-xl">Start searching for your favorite movies!</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;