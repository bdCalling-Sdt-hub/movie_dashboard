import React, { useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import StudioPageTable from '../../Components/StudioPageTable/StudioPageTable'
import AddNewStudioModal from '../../Components/AddNewStudioModal/AddNewStudioModal'

const Studio = () => {
    const [openAddModal, setOpenAddModal] = useState(false)
    return (
        <div className='m-5 bg-[#343944] rounded-md p-5'>
            <div className='flex justify-between items-center '>
                <h1 className='font-semibold text-[24px]'>New Studio</h1>
                <button onClick={() => setOpenAddModal(true)} className='flex items-center justify-center gap-2 bg-[#6200AF] px-4 py-2'>
                    Add New Studio
                    <IoMdAdd className='text-white' />
                </button>
            </div>


            <div className='mt-5'>
                <StudioPageTable />
            </div>


            <AddNewStudioModal setOpenAddModal={setOpenAddModal} openAddModal={openAddModal} />

        </div>
    )
}

export default Studio