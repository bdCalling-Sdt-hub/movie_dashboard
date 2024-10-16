import { Checkbox, Input, Pagination, Select, Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import MovieSelect from '../../Components/MovieSelect/MovieSelect'
import { useGetMovieByStudioIdQuery, useGetStudioListQuery } from '../../redux/api/studioApi'
import { useGetAllMoviesQuery, useGetMoviesQuery, usePostMoviesMutation } from '../../redux/api/movieApi'
import { imgURL } from '../../redux/api/baseApi'
import { toast } from 'sonner'

export const AddNewMoviePage = () => {
    const [type, setType] = useState('movie')
    const [selectedMovie, setSelectedMovie] = useState([])
    const [studioId, setStudioId] = useState('')
    const [deleteIds, setDeleteIds] = useState()
    const [previousSelectedMovie, setPreviousSelectedMovie] = useState([])
    const { data: studioList, isError, isLoading } = useGetStudioListQuery()
    const { data: studioBasedMovies } = useGetMovieByStudioIdQuery({ id: studioId });
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const { data: allMovies, error, loading } = useGetAllMoviesQuery({ type, currentPage, searchQuery, studioId })
    const { data: selectedNewMovie, movieError, movieLoading } = useGetMoviesQuery()
    const pageSize = 20


    console.log(allMovies?.data);


    const [postMovies] = usePostMoviesMutation();


    useEffect(() => {
        const movieIds = studioBasedMovies?.data?.map((movie) => (
            movie?.movie_id
        ))
        setPreviousSelectedMovie(movieIds)
    }, [studioId])

    const selectMoviesFromDatabase = selectedNewMovie?.data?.map(movie => (movie))

    useEffect(() => {
        setDeleteIds(selectMoviesFromDatabase)
    }, [selectedNewMovie])
    const formattedMovie = allMovies?.data?.map((movie, i) => ({
        id: i + 1,
        name: movie?.original_title,
        imageUrl: movie?.poster, ...movie
    }))



    const handleSelectionChange = (selectedMovies) => {
        setSelectedMovie(selectedMovies)
    };


    /** Change tab value  */
    const onChange = (key) => {
        if (key == 1) {
            setType('movie')
        } if (key == 2) {
            setType('tv')
        }


    };

    /** studio table tab data */
    const items = [
        {
            key: "1",
            label: "Movie",

        },
        {
            key: "2",
            label: "TV",

        },
    ];
    const options = studioList?.data?.map(movie => ({
        value: movie?._id,
        label: movie?.name,
        image: movie?.logo
    }))


    // handle select studio  value
    const handleChange = (value) => {
        setStudioId(value)
    };

    // Implement pagination functionality
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    //Implement search functionality
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
    }

    const handleSelectMovie = (movie) => {
        const isMovieAlreadySelected = selectedMovie.some(selected => selected.movie_id === movie.movie_id);
        if (isMovieAlreadySelected) {
            setSelectedMovie(prev => prev.filter(selected => selected.movie_id !== movie.movie_id));
        } else {
            setSelectedMovie(prev => [...prev, { ...movie, type }]);
        }
    }

    // handle add movies function
    const handleAddMovies = () => {
        if (!studioId) {
            return toast.error("Please Select Studio!!")
        }
        const data = {
            studio_id: studioId,
            // type: type,
            movies: selectedMovie,
            delete_ids: [],
            total_delete: 0,
            total_movies: selectedMovie.length
        }
        console.log(data);
        postMovies(data).unwrap()
            .then((payload) => toast.success(payload?.message))
            .catch((error) => toast.error(error?.data?.message))
    }
    return (
        <div className='m-5 bg-[#343944] rounded-md p-5'>
            <div className='flex justify-between items-center '>
                <h1 className='font-semibold text-[24px] flex items-center gap-5'>
                    <Link to={-1}><FaArrowLeft /></Link>
                    Add Movies
                </h1>

            </div>


            <div className='grid grid-cols-3 justify-between items-center '>

                <div className='flex items-center gap-2 '>
                    <p className='px-5 py-2 bg-[#C2C2C2] text-black text-xl font-semibold'>Select Studio</p>
                    <Select
                        style={{
                            width: 50,
                        }}
                        onChange={handleChange}
                        popupMatchSelectWidth={false}
                        placement={'bottomRight'}
                        placeholder={'Select a studio'}
                    >
                        {options?.map(option => (
                            <Option key={option.value} value={option.value}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        src={`${imgURL}${option.image}`}
                                        alt={option.label}
                                        style={{ width: 20, height: 20, marginRight: 8 }}
                                    />
                                    <span>{option.label}</span>
                                </div>
                            </Option>
                        ))}
                    </Select>
                </div>

                <div className='mt-5'>
                    <Tabs className='text-white' defaultActiveKey="1" items={items} onChange={onChange} />
                </div>

                <div>
                    <Input value={searchQuery}
                        onChange={handleSearch} className=' h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search" />
                </div>

            </div>



            <div className="p-4 ">
                {/* <MovieSelect selectMoviesFromDatabase={selectMoviesFromDatabase} setDeleteIds={setDeleteIds} deleteIds={deleteIds} movies={formattedMovie} onSelectionChange={handleSelectionChange} /> */}
                <div className="grid grid-cols-4 py-10">
                    {allMovies?.data.map((movie, i) => (
                        <div key={i} className='flex items-center gap-2 py-2 my-4 '>
                            <Checkbox
                                checked={selectedMovie?.find(x => x?.movie_id === movie?.movie_id) || movie?.selected}
                                disabled={movie?.selected}
                                onChange={() => handleSelectMovie(movie)}
                                className="checkbox-style disabled:color"
                                style={{ '--ant-checkbox-check-color': 'white' }}
                            />
                            {/* <button className={`${previousSelectedMovie?.includes(movie?.movie_id) ? 'bg-[#CB3CFF] p-[3px] rounded-sm'  : ''}`}
                            disabled={previousSelectedMovie?.includes(movie?.movie_id)}
                            ><FaCheck size={10} /></button> */}
                            <img src={movie.poster || 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg'} alt={movie.title} className="show-image h-10 w-10 rounded-full" />
                            <p className='text-[20px]'>{movie.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex mt-5 items-center justify-center'>
                <button className='bg-[#6200AF] px-8 py-2 text-xl rounded-3xl' onClick={() => handleAddMovies()}>Done</button>
            </div>
            <div className='flex justify-end pr-10'>
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={allMovies?.total_pages}
                    showSizeChanger={false}
                    showTotal={(total, range) => `${range[0]} - ${range[1]} of ${total}`}
                    onChange={handlePageChange} />
            </div>
        </div>
    )
}
