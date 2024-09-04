import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import StudioPageTable from '../../Components/StudioPageTable/StudioPageTable'
import { IoMdAdd } from 'react-icons/io'
import AddNewStudioModal from '../../Components/AddNewStudioModal/AddNewStudioModal'
import { Link } from 'react-router-dom'
import { useGetStudioListQuery } from '../../redux/api/studioApi'
import { imgURL } from '../../redux/api/baseApi'

const AddMovies = () => {
    const [openAddModal, setOpenAddModal] = useState(false)
    const { data: studioList, isError, isLoading } = useGetStudioListQuery()
    
      // Formatted studio table data
      const formattedTable = studioList?.data?.map((studio, i) => (
        {    
            id : studio?._id,   
            key : i+1,
            serial: i + 1,
            studio: { name: studio?.name, logo: `${imgURL}${studio?.logo}` },
            totalMovie: studio?.total_movies,
        }

    ))
    return (
        <div className='m-5 bg-[#343944] rounded-md p-5'>
            <div className='flex justify-between items-center '>
                <h1 className='font-semibold text-[24px] flex items-center gap-5'>
                    <Link to={-1}><FaArrowLeft /></Link>
                    New Movies
                </h1>
                <Link to={`/add-new-movies`} className='flex items-center justify-center gap-2 hover:text-white bg-[#6200AF] px-4 py-2'>
                    Add New Movie
                    <IoMdAdd className='text-white' />
                </Link>
            </div>


            <div className='mt-5'>
                <StudioPageTable edit={true} formattedTable={formattedTable} />
            </div>


            <AddNewStudioModal setOpenAddModal={setOpenAddModal} openAddModal={openAddModal} />

        </div>
    )
}

export default AddMovies





12