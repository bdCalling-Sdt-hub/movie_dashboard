import { Modal } from 'antd'
import React from 'react'
import { useDeleteStudioMutation } from '../../redux/api/studioApi'
import { toast } from 'sonner'

const DeleteModal = ({ openAddModal, setOpenAddModal, studioId }) => {
    const [deleteStudio] = useDeleteStudioMutation()
    const handleDeleteStudio = (value) => {
        console.log(value);
        if (value == 'yes') {
            deleteStudio(studioId).unwrap()
                .then((payload) =>{
                    if(payload?.success){
                        toast.success(payload?.message)
                    }
                })
                .catch((error) => toast.error('Something went wrong'));
            setOpenAddModal(false)
        }
        if (value == 'no') {
            setOpenAddModal(false)
        }
    }

    return (
        <Modal
            open={openAddModal}
            centered
            footer={false}
            onCancel={() => setOpenAddModal(false)}
            className='custom-modal'
        >
            <div >
                <p className='text-[20px] py-2 '>Delete Studio</p>


                <p className='text-center text-[26px] mt-5'>Are You Sure You Won't to Delete This Studio!!</p>
                {/* <p className='text-center leading-8'> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p> */}
                <div className='flex items-center justify-center gap-4 pt-5'>
                    <button className='flex items-center gap-2 py-3 px-8 bg-[#6200AF]  text-white font-semibold rounded-full' onClick={() => handleDeleteStudio('yes')} >
                        Yes
                    </button>
                    <button onClick={() => handleDeleteStudio('no')} className='py-2 px-6 flex items-center gap-1  border  rounded-full text-white font-semibold'>
                        No
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default DeleteModal