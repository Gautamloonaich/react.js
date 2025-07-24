import React from 'react';

const PLACEHOLDER_IMAGE = "https://via.placeholder.com/300x450.png?text=No+Poster";

const MovieCard = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="group bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img
        src={poster}
        alt={`Poster for ${movie.Title}`}
        className="w-full h-96 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white truncate group-hover:text-sky-500 transition-colors duration-300">
          {movie.Title}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-1">{movie.Year}</p>
       
      </div>
    </div>
  );
};

export default MovieCard;