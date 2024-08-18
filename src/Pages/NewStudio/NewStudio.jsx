import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import NewStudioTable from '../../Components/NewStudioTable/NewStudioTable'

const NewStudio = () => {
    return (
        <div className='m-5 bg-[#343944] rounded-md'>
            <div className="flex items-center gap-2 p-5 text-[24px]">
                <BsArrowLeftShort size={30} className='cursor-pointer' />
                New Studio
            </div>
            <div className='mt-5'>
                <NewStudioTable
                    pagination={true}
                />
            </div>
        </div>
    )
}

export default NewStudio