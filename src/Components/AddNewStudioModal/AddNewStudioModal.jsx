import { Form, Input, Modal, Select, Upload, message } from 'antd'
import Dragger from 'antd/es/upload/Dragger'
import { InboxOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
// import { message, Upload } from 'antd';
// const { Dragger } = Upload;
// const { Dragger } = Upload;
const AddNewStudioModal = ({ openAddModal, setOpenAddModal }) => {
    const onFinish = (values) => {
        console.log('Form values:', values);
        console.log(values?.image?.fileList[0]);
    };


    // const props = {
    //     name: 'file',
    //     multiple: true,
    //     // action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    //     onChange(info) {
    //         const { status } = info.file;
    //         if (status !== 'uploading') {
    //             console.log(info.file, info.fileList);
    //         }
    //         if (status === 'done') {
    //             message.success(`${info.file.name} file uploaded successfully.`);
    //         } else if (status === 'error') {
    //             message.error(`${info.file.name} file upload failed.`);
    //         }
    //     },
    //     onDrop(e) {
    //         console.log('Dropped files', e.dataTransfer.files);
    //     },
    // };

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
                                <Input placeholder="Enter Studio Name " className='py-2' variant="filled" />

                            </Form.Item>
                            <Form.Item label="Image" name="image">
                                <Dragger  >
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>

                                </Dragger>
                            </Form.Item>
                            <Form.Item label="Description" name="description">
                                <TextArea placeholder='Description...' rows={4} />
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