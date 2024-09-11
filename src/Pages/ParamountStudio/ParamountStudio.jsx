import { Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { IoEyeSharp } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import DeleteModal from '../../Components/DeleteModal/DeleteModal';
import AddNewStudioModal from '../../Components/AddNewStudioModal/AddNewStudioModal';
import { FaArrowLeft } from 'react-icons/fa';
import { useGetMovieByStudioIdQuery } from '../../redux/api/studioApi';
const ParamountStudio = () => {
    const [openAddModal, setOpenAddModal] = useState(false)
    const {id} = useParams()

    const {data: allMovies  } = useGetMovieByStudioIdQuery(id)

    /** formatted table data for show movie  */
    const formattedMovie = allMovies?.data?.map((movie,i)=>({
        key : i + 1,
        serial : i + 1,
        releaseDate :  new Date(movie?.release_date).toISOString().split('T')[0],
        movie : {name : movie?.title , poster : movie?.poster}

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
            render: () => (
                <Space className=''>

                    <DeleteOutlined onClick={() => setDeleteOpenModal(true)} className='cursor-pointer' style={{ color: '#AEB9E1' }} />
                </Space>
            ),
        },
    ];
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
                pagination={true}
                rowClassName="custom-row"
                className="custom-table"
            />

            <AddNewStudioModal setOpenAddModal={setOpenAddModal} openAddModal={openAddModal} />
        </div>
    );
};

export default ParamountStudio;