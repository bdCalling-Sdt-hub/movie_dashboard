import React, { useState } from 'react';

const MovieSelect = ({ movies, onSelectionChange }) => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleCheckboxChange = (movie) => {
    setSelectedMovies((prevState) => {
      const isSelected = prevState.some((m) => m.id === movie.id);
      const newSelection = isSelected
        ? prevState.filter((m) => m.id !== movie.id)
        : [...prevState, movie];

      onSelectionChange(newSelection);
      return newSelection;
    });
  };

  return (
    <div className=''>
      <div className="grid grid-cols-4 items-center justify-between">
        {movies?.map((movie) => (
          <div key={movie.id} className="flex items-center p-2 px-5  gap-2 rounded-lg">
            <input
              type="checkbox"
              checked={selectedMovies.some((m) => m.id === movie.id)}
              onChange={() => handleCheckboxChange(movie)}
              className="mt-2"
            />
            <img
              src={movie.imageUrl}
              alt={movie.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-lg font-semibold">{movie.name}</div>

          </div>
        ))}
      </div></div>
  );
};

export default MovieSelect;
