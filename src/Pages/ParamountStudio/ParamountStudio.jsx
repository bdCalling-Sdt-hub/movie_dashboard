import { Popconfirm, Space, Table } from 'antd';
import React, {  useState } from 'react';
import {  DeleteOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import AddNewStudioModal from '../../Components/AddNewStudioModal/AddNewStudioModal';
import { FaArrowLeft } from 'react-icons/fa';
import { useDeleteMovieMutation, useGetMovieByStudioIdQuery } from '../../redux/api/studioApi';
import { toast } from 'sonner';
import { useGetSingleStudioMovieQuery } from '../../redux/api/movieApi';
const ParamountStudio = () => {
    const [openAddModal, setOpenAddModal] = useState(false)
    const { id } = useParams()
    const { data: allMovies } = useGetSingleStudioMovieQuery(id)

    // delete movie api
    const [deleteMovie] = useDeleteMovieMutation()

    /** formatted table data for show movie  */
    const formattedMovie = allMovies?.data?.map((movie, i) => ({
        key: i + 1,
        id: movie?._id,
        serial: i + 1,
        releaseDate: new Date(movie?.release_date).toISOString().split('T')[0],
        movie: { name: movie?.title, poster: movie?.poster }

    }))



    const columns = [
        {
            title: 'Serial No.',
            dataIndex: 'serial',
            key: 'serial',
        },
        {
            title: 'Movie',
            dataIndex: 'movie',
            key: 'movie',
            render: (movie) => (
                <Space>
                    <img src={movie.poster} alt={movie.name} style={{ width: 30, height: 30, borderRadius: '50%' }} />
                    <span>{movie.name}</span>
                </Space>
            ),
        },
        {
            title: 'Release Date',
            dataIndex: 'releaseDate',
            key: 'releaseDate',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Popconfirm
                    title="Delete the movie"
                    description="Are you sure to delete this movie?"
                    onConfirm={() => handleDeleteMovie(record)}

                    okText="Yes"
                    cancelText="No"
                >
                    {/* <Space className=''> */}

                    <DeleteOutlined className='cursor-pointer' style={{ color: '#AEB9E1' }} />
                    {/* </Space> */}
                </Popconfirm>
            ),
        },
    ];



    /** handle delete movie  */
    const handleDeleteMovie = (movie) => {
        const data = {
            ids: [movie?.id],
            total_movies: 1,
            studio_id: id
        }
        deleteMovie(data).unwrap()
            .then((payload) => toast.success(payload?.message))
            .catch((error) => toast.error(error?.data?.message));
    }
    return (
        <div className='m-5 bg-[#343944] rounded-md p-5'>

            <div className='flex justify-between items-center '>
                <div className='flex items-center gap-2'>
                    <Link to={-1}><FaArrowLeft size={20} /></Link>
                    <h1 className='font-semibold text-[24px]'>Paramount Studio</h1>
                </div>
                {/* <button onClick={() => setOpenAddModal(true)} className='flex items-center justify-center gap-2 bg-[#6200AF] px-4 py-2'>
                    Add New Studio
                    <IoMdAdd className='text-white' />
                </button> */}
            </div>
            <Table
                columns={columns}
                dataSource={formattedMovie}
                pagination={{
                    pageSizeOptions: 5,
                    showTotal: (total, range) => ` ${range[0]}-${range[1]} of ${total}`,
                    locale: {
                        items_per_page: '',
                        prev_page: 'Previous',
                        next_page: 'Next',
                    },
                }}
                rowClassName="custom-row"
                className="custom-table"
            />

            <AddNewStudioModal setOpenAddModal={setOpenAddModal} openAddModal={openAddModal} />
        </div>
    );
};

export default ParamountStudio;