import { Space, Table } from 'antd';
import { IoEyeSharp } from 'react-icons/io5';
import DeleteModal from '../DeleteModal/DeleteModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdModeEditOutline, MdOutlineDelete } from 'react-icons/md';
const StudioPageTable = ({ edit ,formattedTable}) => {
    const [deleteOpenModal, setDeleteOpenModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)
    const [studioId, setStudioId ] = useState()

    const [pageSize, setPageSize] = useState(10);

    const handlePageSizeChange = (current, size) => {
      setPageSize(size);
    };

   


    const handleDeleteStudio = (studio)=>{
        setDeleteOpenModal(true)
        setStudioId(studio?.id)

    }


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
            align: "center"
        },
        {
            title: 'Action',
            key: 'action',
            align : 'center',
            render: (studio) => (
                <Space className=''>
                    { edit && <Link to={'/add-movies/edit-movies'}><MdModeEditOutline className='cursor-pointer' size={25} style={{ color: '#AEB9E1' }} /></Link>}
                    <Link to={`/studio/paramount-studio/${studio?.id}`}><IoEyeSharp className='cursor-pointer' size={25} style={{ color: '#AEB9E1' }} /></Link>
                    <MdOutlineDelete size={25} onClick={() => handleDeleteStudio(studio)} className='cursor-pointer' style={{ color: '#AEB9E1' }} />

                </Space>

            ),
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={formattedTable}
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

   
    <DeleteModal studioId={studioId}  openAddModal={deleteOpenModal} setOpenAddModal={setDeleteOpenModal} />
        </div>

    )
}

export default StudioPageTable