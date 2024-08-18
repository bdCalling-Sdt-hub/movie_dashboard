import { Form, Input, Modal, Select, Upload } from 'antd'
import Dragger from 'antd/es/upload/Dragger'
import { InboxOutlined } from '@ant-design/icons';
// const { Dragger } = Upload;
const AddNewStudioModal = ({ openAddModal, setOpenAddModal }) => {
    const onFinish = (value) => {
        console.log(value)
    }



    const props = {
        name: 'file',
        multiple: true,
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return (
        <Modal
            open={openAddModal}
            centered
            footer={false}
            onCancel={() => setOpenAddModal(false)}
            className='custom-modal'
        >
            <div >
                <p className='text-xl  py-2 font-semibold'>Add New Studio</p>
                <Form className=''
                    layout='vertical'
                    onFinish={onFinish}
                >
                    <div className='flex gap-3  mt-5'>
                        <div className=' w-full'>
                            <Form.Item
                                name={`Add Studio Name`}
                                label={`Add Studio Name`}
                                rules={[
                                    {
                                        message: 'Studio Name is required',

                                    }
                                ]}
                            >
                                <Input className=' border outline-none w-full ' placeholder='' />
                            </Form.Item>
                        </div>
                        <div className=' w-full'>
                            <Form.Item
                                name={`Select Movie`}
                                label={`Select movie app`}
                                rules={[
                                    {
                                        message: 'Studio Name is required',

                                    }
                                ]}
                            >
                                <Input className=' border outline-none' placeholder='' />
                            </Form.Item>
                        </div>
                    </div>


                    <Form.Item label="Add Movie Name" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} className='pb-0' >
                        <Select defaultValue="Add Movie Name">
                            <Option value="all">Select Movie</Option>
                            <Option value="movie 1">Movie 1</Option>
                            <Option value="movie 1">Movie 2</Option>
                        </Select>
                    </Form.Item>


                    <div className='my-8'>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            {/* <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                banned files.
                            </p> */}
                        </Dragger>
                    </div>





                    <div className='flex items-center justify-center gap-4'>
                        <button className='flex items-center gap-2 py-3 px-8 bg-[#6200AF]  text-white font-semibold rounded-full'>
                            save
                        </button>
                        <button className='py-2 px-6 flex items-center gap-1  border  rounded-full text-white font-semibold'>
                            Cancel
                        </button>
                    </div>

                </Form>
            </div>
        </Modal>
    )
}

export default AddNewStudioModal