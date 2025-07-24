import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie (e.g., 'iron man')"
        className="w-full px-4 py-3 text-lg text-slate-800 bg-white dark:bg-slate-800 dark:text-white border-2 border-slate-300 dark:border-slate-600 rounded-lg shadow-2xl shadow-blue-300  focus:outline-none focus:ring-2 focus:ring-sky-500 transition-shadow duration-300"
      />
    </div>
  );
};

export default SearchBar;