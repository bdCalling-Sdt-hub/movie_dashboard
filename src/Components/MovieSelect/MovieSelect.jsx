import { Checkbox } from 'antd';
import React, { useEffect, useState } from 'react';

const MovieSelect = ({ movies, onSelectionChange, selectMoviesFromDatabase, deleteIds, setDeleteIds }) => {
  const [selectedMovies, setSelectedMovies] = useState([]);
  // console.log(deleteIds);
  const [totalSelectMovie, setTotalSelectMovie] = useState([...selectedMovies])
  useEffect(() => {
    if (deleteIds) {
      setTotalSelectMovie([...selectedMovies, ...deleteIds])
    }
  }, [deleteIds, selectedMovies])
  const handleCheckboxChange = (movie) => {
    setSelectedMovies((prevState) => {
      const isSelected = prevState?.some((m) => m.id === movie.id);
      const newSelection = isSelected
        ? prevState?.filter((m) => m?.id !== movie?.id)
        : [...prevState, movie];

      onSelectionChange(newSelection);
      return newSelection;
    });
  };
  // console.log(selectedMovies);

  const handleChecked = (movie) => {

    selectedMovies?.some((m) => m.movie_id === movie.movie_id)

  }

  return (
    <div className=''>
      <div className="grid grid-cols-4 items-center justify-between">
        {movies?.map((movie,i) => (
          // <div key={movie.id} className="flex items-center p-2 px-5  gap-2 rounded-lg">
          //   <input
          //     type="checkbox"
          //     checked={handleChecked(movie)}
          //     onChange={() => handleCheckboxChange(movie)}
          //     className="mt-2"
          //   />
          //   <img
          //     src={movie.imageUrl}
          //     alt={movie.name}
          //     className="w-16 h-16 rounded-full object-cover"
          //   />
          //   <div className="text-lg font-semibold">{movie.name}</div>

          // </div>
          <div key={i} className='flex items-center gap-2 py-2 my-4 '>
            <Checkbox
              checked={!selectedMovies.includes(movie._id)} // Checked if not in the unchecked list
              onChange={() => handleSelectMovie(movie._id)}
              className="checkbox-style "
            />
            <img src={movie.poster || 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg'} alt={movie.title} className="show-image h-10 w-10 rounded-full" />
            <p className='text-[20px]'>{movie.title}</p>
          </div>
        ))}
      </div></div>
  );
};

export default MovieSelect;
