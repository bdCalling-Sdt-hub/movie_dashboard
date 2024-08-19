import { Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { IoEyeSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import DeleteModal from '../../Components/DeleteModal/DeleteModal';
import AddNewStudioModal from '../../Components/AddNewStudioModal/AddNewStudioModal';
const ParamountStudio = () => {
    const [openAddModal, setOpenAddModal] = useState(false)

    const data = [
        {
            key: '1',
            serial: '1',
            studio: { name: 'Hulu', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg' },
            totalMovie: 12,
            movie: { name: 'The Godfather', poster: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg' },
        },
        {
            key: '2',
            serial: '2',
            studio: { name: 'max', logo: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg' },
            totalMovie: 15,
            movie: { name: 'Inception', poster: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg' },
        },
    ];



    const columns = [
        {
            title: 'Serial No.',
            dataIndex: 'serial',
            key: 'serial',
        },
        {
            title: 'Studio',
            dataIndex: 'studio',
            key: 'studio',
            render: (studio) => (
                <Space>
                    <img src={studio.logo} alt={studio.name} style={{ width: 30, height: 30, borderRadius: '50%' }} />
                    <span>{studio.name}</span>
                </Space>
            ),
        },
        {
            title: 'Total Movie',
            dataIndex: 'totalMovie',
            key: 'totalMovie',

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
                <h1 className='font-semibold text-[24px]'>Paramount Studio</h1>
                <button onClick={() => setOpenAddModal(true)} className='flex items-center justify-center gap-2 bg-[#6200AF] px-4 py-2'>
                    Add New Studio
                    <IoMdAdd className='text-white' />
                </button>
            </div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={true}
                rowClassName="custom-row"
                className="custom-table"
            />

            <AddNewStudioModal setOpenAddModal={setOpenAddModal} openAddModal={openAddModal} />
        </div>
    );
};

export default ParamountStudio;