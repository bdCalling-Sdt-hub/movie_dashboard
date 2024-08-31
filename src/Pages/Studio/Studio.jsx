import React, { useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import StudioPageTable from '../../Components/StudioPageTable/StudioPageTable'
import AddNewStudioModal from '../../Components/AddNewStudioModal/AddNewStudioModal'
import DeleteModal from '../../Components/DeleteModal/DeleteModal'
import { FaArrowLeft } from 'react-icons/fa'
import { Input, Tabs } from 'antd'
import { Link } from 'react-router-dom'

const Studio = () => {
    const [openAddModal, setOpenAddModal] = useState(false)
    const [type, setType] = useState('movie')
    console.log(type)

    const items = [

        {
            key: "1",
            label: "Movie",
            children: (
                <StudioPageTable edit={false} />
            ),
        },
        {
            key: "2",
            label: "TV",
            children: (
                <StudioPageTable edit={false} />
            ),
        },
    ];

    /** Change tab value  */
    const onChange = (key) => {
        if (key == 1) {
            setType('movie')
        } if (key == 2) {
            setType('tv ')
        }


    };

    /** Add new studio function */
    const handleNewStudio = () => {
        setOpenAddModal(true)
    }
    return (
        <div className='m-5 bg-[#343944] rounded-md p-5'>
            <div className='flex justify-between items-center '>

                <h1 className='font-semibold text-[24px] flex items-center gap-5'>
                    <Link to={-1}>
                        <FaArrowLeft />
                    </Link>

                    New Studio
                </h1>
                <button onClick={() => handleNewStudio()} className='flex items-center justify-center gap-2 bg-[#6200AF] px-4 py-2'>
                    Add New Studio
                    <IoMdAdd className='text-white' />
                </button>
            </div>




            <div className='mt-5'>
                {/* <StudioPageTable edit={false} /> */}
                <Tabs className='text-white' defaultActiveKey="1" items={items} onChange={onChange} />
            </div>


            <AddNewStudioModal setOpenAddModal={setOpenAddModal} openAddModal={openAddModal} />

        </div>
    )
}

export default Studio