import { Checkbox, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { SearchOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import { useDeleteMovieMutation, useGetMovieByStudioIdQuery, useGetStudioByIdQuery } from '../../redux/api/studioApi';
import { imgURL } from '../../redux/api/baseApi';
import { toast } from 'sonner';

const EditMovieDetails = () => {
    const { id } = useParams();
    const { data: getStudioById } = useGetStudioByIdQuery(id);
    const { data: allMovies } = useGetMovieByStudioIdQuery(id);
    const [deleteMovies] = useDeleteMovieMutation()
    const [selectedMovies, setSelectedMovies] = useState([]);

    // Initialize selectedMovies with no movie (since initially all checkboxes will be checked)
    useEffect(() => {
        if (allMovies?.data) {
            setSelectedMovies([]); // Initially, no movies are unchecked
        }
    }, [allMovies]);

    // Toggle the selection of a movie (add to selectedMovies if unchecked)
    const handleSelectMovie = (movieId) => {
        setSelectedMovies(prevSelected =>
            prevSelected.includes(movieId)
                ? prevSelected.filter(id => id !== movieId) // Remove if already unchecked (checked again)
                : [...prevSelected, movieId] // Add if unchecked
        );
    };


    const handleDeleteMovie = () => {
        if(selectedMovies.length <=0){
            return toast.error("P")
        }
        const data = {
            ids: selectedMovies,
            total_movies: selectedMovies.length,
            studio_id: id
        }
        deleteMovies(data).unwrap()
            .then((payload) => toast.success(payload?.message))
            .catch((error) => toast.error(error?.data?.message));
    }

    //   console.log("Unchecked Movies:", selectedMovies); // Will log the movies that are unchecked

    return (
        <div className='m-5 bg-[#343944] rounded-md p-5'>
            <div className='flex gap-5 items-center font-semibold text-[24px] '>
                <Link to={-1}><FaArrowLeft className='cursor-pointer' size={20} /></Link>
                <p className=''>Edit Movie Details</p>
            </div>
            <div className='flex items-center gap-2 mt-4  bg-[#1F1E20] w-[15%] py-2  justify-center rounded-sm'>
                <img className='h-10 w-10 rounded-full' src={`${imgURL}${getStudioById?.data?.logo}`} alt="" />
                <p>{getStudioById?.data?.name}</p>
            </div>

            <div className='flex justify-between items-center mt-5'>
                <h1>Select Movie</h1>
                <Input suffix={<SearchOutlined className='text-white' />} placeholder='Search here' className='custom-input w-[30%] bg-[#343944] hover:bg-[#343944] rounded-full' />
            </div>

            <div>
                <div className="grid grid-cols-4 py-10">
                    {allMovies?.data.map((movie, i) => (
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
                </div>

                <div className='flex items-center justify-center'>
                    <button disabled={selectedMovies.length <=0} className={`bg-[#6200AF] rounded-full px-8 py-2  ${selectedMovies.length <=0 && "cursor-not-allowed bg-[#6200AF] text-gray-400 " }` }onClick={() => handleDeleteMovie()}>
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditMovieDetails;
