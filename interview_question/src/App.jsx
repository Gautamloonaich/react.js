import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import ThemeToggle from './ThemeToggle';
import useDebounce from './useDebounce';



function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [theme, setTheme] = useState('light');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const fetchMovies = useCallback(async (searchQuery) => {
    if (!searchQuery) {
      setMovies([]);
      setError(null);
      setLoading(false);
      return;
    }
    
    setLoading(true);
    setError(null);
    setHasSearched(true);
//  its my ApI=(http://www.omdbapi.com/?i=tt3896198&apikey=4cec3ac2)
    try {
      let API_KEY = '4cec3ac2';
      let response = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`);
      let data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setError(null);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError('Failed to fetch data. Please check your connection.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm, fetchMovies]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-sky-600 dark:text-sky-400">Movie</h1>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </header>

        <main>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <MovieList movies={movies} loading={loading} error={error} hasSearched={hasSearched} />
        </main>
      </div>
    </div>
  );
}

export default App;