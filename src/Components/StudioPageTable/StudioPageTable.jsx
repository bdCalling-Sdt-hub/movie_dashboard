import { Space, Table } from 'antd';
import img1 from '../../assets/Images/Google.png'
import img2 from '../../assets/Images/Spotify.png'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { IoEyeSharp } from 'react-icons/io5';
import DeleteModal from '../DeleteModal/DeleteModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddNewStudioModal from '../AddNewStudioModal/AddNewStudioModal';
const StudioPageTable = ({ pagination }) => {
    const [deleteOpenModal, setDeleteOpenModal] = useState(false)
    const [openEditModal , setOpenEditModal] = useState(false)



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
                    <EditOutlined onClick={()=> handelEditMovie()} className='cursor-pointer' style={{ color: '#AEB9E1' }} />
                    <Link to={'/studio/paramount-studio'}><IoEyeSharp  className='cursor-pointer' style={{ color: '#AEB9E1' }} /></Link>
                    <DeleteOutlined onClick={()=> setDeleteOpenModal(true)} className='cursor-pointer' style={{ color: '#AEB9E1' }} />
                </Space>
            ),
        },
    ];

    const handelEditMovie=()=>{
        setOpenEditModal(true)
    }


    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={pagination}
                rowClassName="custom-row"
                className="custom-table"
            />

            <DeleteModal openAddModal={deleteOpenModal} setOpenAddModal={setDeleteOpenModal} />
            <AddNewStudioModal  openAddModal={openEditModal} setOpenAddModal={setOpenEditModal} />
        </div>

    )
}

export default StudioPageTable