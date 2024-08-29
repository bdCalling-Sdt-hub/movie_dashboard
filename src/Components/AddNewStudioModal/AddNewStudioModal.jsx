import { Form, Input, Modal, Select, Upload } from 'antd'
import Dragger from 'antd/es/upload/Dragger'
import { InboxOutlined } from '@ant-design/icons';
// const { Dragger } = Upload;
const AddNewStudioModal = ({ openAddModal, setOpenAddModal }) => {
    const onFinish = (values) => {
        console.log('Form values:', values);
    };


    return (
        <Modal
        open={openAddModal}
        centered
        footer={false}
        onCancel={() => setOpenAddModal(false)}
        className='custom-modal'
    >
        <div>
            <p className='text-xl py-2 font-semibold'>New Studio</p>
            <Form
                layout='vertical'
                onFinish={onFinish}
            >
                <div className='flex gap-3 mt-5'>
                    <div className='w-full'>
                        <Form.Item
                            name="studio"
                            label="Select Studio"
                            rules={[{ required: true, message: 'Please select a studio!' }]}
                        >
                            <Select
                                placeholder="Select a studio"
                                style={{ width: '100%' }}
                                options={[
                                    { value: 'jack', label: 'Jack' },
                                    { value: 'lucy', label: 'Lucy' },
                                    { value: 'yiminghe', label: 'Yiminghe' },
                                ]}
                            />
                        </Form.Item>
                    </div>
                </div>

                <div className='flex items-center justify-center gap-4 mt-8'>
                    <button
                        type="button"
                        onClick={() => setOpenAddModal(false)}
                        className='py-2 px-6 flex items-center gap-1 border rounded-full text-white font-semibold'
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className='flex items-center gap-2 py-3 px-8 bg-[#6200AF] text-white font-semibold rounded-full'
                    >
                        Save
                    </button>
                </div>
            </Form>
        </div>
    </Modal>
    )
}

export default AddNewStudioModal