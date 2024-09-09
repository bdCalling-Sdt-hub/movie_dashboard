import { Input, Pagination, Select, Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import MovieSelect from '../../Components/MovieSelect/MovieSelect'
import { useGetStudioListQuery } from '../../redux/api/studioApi'
import { useGetAllMoviesQuery, useGetMoviesQuery, usePostMoviesMutation } from '../../redux/api/movieApi'
import { imgURL } from '../../redux/api/baseApi'

export const AddNewMoviePage = () => {
    const [type, setType] = useState('movie')
    const [selectedMovie, setSelectedMovie] = useState([])
    const [studioId, setStudioId] = useState('')
    const [deleteIds, setDeleteIds] = useState()

    const { data: studioList, isError, isLoading } = useGetStudioListQuery()
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const { data: allMovies, error, loading } = useGetAllMoviesQuery({ type, currentPage, searchQuery, studioId })
    const { data: selectedNewMovie, movieErron, movieLoading } = useGetMoviesQuery()
    const pageSize = 20
    const [postMovies] = usePostMoviesMutation();




    const selectMoviesFromDatabase = selectedNewMovie?.data?.map(movie =>(movie))

   useEffect(()=>{
    setDeleteIds(selectMoviesFromDatabase)
   },[selectedNewMovie])
//    console.log(selectMoviesFromDatabase);
    // const removedSelectedMovie = allMovies?.data?.filter(movie => {
    //     return !selectedNewMovie?.data?.some(selected => selected?.movie_id === movie?.movie_id);
    // })
    // Formatted all movie table data
    const formattedMovie = allMovies?.data?.map((movie, i) => ({
        id: i + 1,
        name: movie?.original_title,
        imageUrl: movie?.poster, ...movie
    }))



    const handleSelectionChange = (selectedMovies) => {
        setSelectedMovie(selectedMovies)
    };
    // console.log(studioId);


    /** Change tab value  */
    const onChange = (key) => {
        if (key == 1) {
            setType('movie')
        } if (key == 2) {
            setType('tv ')
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


    const handleAddMovie = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };



    // handle select studio  value
    const handleChange = (value) => {
        setStudioId(value)
    };

    // Implemenent pagination functionality
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    //Implement search functionality
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
    }

    // handle add movies function
    const handleAddMovies = () => {
        const data = {
            studio_id: studioId,
            type: type,
            movies: selectedMovie,
            total_movies: selectedMovie.length
        }
        postMovies(data).unwrap()
            .then((payload) => console.log('fulfilled', payload))
            .catch((error) => console.error('rejected', error))
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
                <MovieSelect selectMoviesFromDatabase={selectMoviesFromDatabase} setDeleteIds={setDeleteIds} deleteIds={deleteIds} movies={formattedMovie} onSelectionChange={handleSelectionChange} />
            </div>

            <div className='flex mt-5 items-center justify-center'>
                <button className='bg-[#6200AF] px-8 py-2 text-xl rounded-3xl' onClick={() => handleAddMovies()}>Done</button>
            </div>
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={allMovies?.total_pages}
                showSizeChanger={false}
                onChange={handlePageChange} />
        </div>
    )
}
