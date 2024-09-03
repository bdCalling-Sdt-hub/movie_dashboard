import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import StudioPageTable from '../../Components/StudioPageTable/StudioPageTable'
import { IoMdAdd } from 'react-icons/io'
import AddNewStudioModal from '../../Components/AddNewStudioModal/AddNewStudioModal'

const AddMovies = () => {
    const [openAddModal, setOpenAddModal] = useState(false)

    return (
        <div className='m-5 bg-[#343944] rounded-md p-5'>
            <div className='flex justify-between items-center '>
                <h1 className='font-semibold text-[24px] flex items-center gap-5'>
                    <FaArrowLeft />
                    New Movies
                </h1>
                <button onClick={() => setOpenAddModal(true)} className='flex items-center justify-center gap-2 bg-[#6200AF] px-4 py-2'>
                    Add New Movie
                    <IoMdAdd className='text-white' />
                </button>
            </div>


            <div className='mt-5'>
                <StudioPageTable edit={true} />
            </div>


            <AddNewStudioModal setOpenAddModal={setOpenAddModal} openAddModal={openAddModal} />

        </div>
    )
}

export default AddMovies





12