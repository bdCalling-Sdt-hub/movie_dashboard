import React from 'react'
import { Link } from 'react-router-dom'
import NewStudioTable from '../NewStudioTable/NewStudioTable'

const NewStudio = () => {
    return (
        <div className='mx-2'>
            <div className="flex justify-between items-center mb-[24px]">
                <h1 className="font-semibold text-[20px]">New Studio</h1>
                <Link to={`/new-studio`}>
                    <p className=" cursor-pointer  text-[#AEB9E1] text-[16px]">View All</p>
                </Link>
            </div>

            <NewStudioTable pagination={false} />

        </div>
    )
}

export default NewStudio