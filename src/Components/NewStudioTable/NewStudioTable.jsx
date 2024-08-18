import { Space, Table } from 'antd';
import img1 from '../../assets/Images/Google.png'
import img2 from '../../assets/Images/Spotify.png'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
const NewStudioTable = ({ pagination }) => {




    const data = [
        {
            key: '1',
            serial: '1',
            studio: { name: 'Hulu', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg' },
            movie: { name: 'The Godfather', poster: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg' },
        },
        {
            key: '2',
            serial: '2',
            studio: { name: 'max', logo: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg' },
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
                    <EditOutlined className='cursor-pointer' style={{ color: '#AEB9E1' }} />
                    <DeleteOutlined className='cursor-pointer' style={{ color: '#AEB9E1' }} />
                </Space>
            ),
        },
    ];




    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={pagination}
            rowClassName="custom-row"
            className="custom-table"
        />
    )
}

export default NewStudioTable