import { Form, Input, Modal, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import { useGetStudioListQuery } from '../../redux/api/studioApi';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoMdImage } from 'react-icons/io';
import { toast } from 'sonner';

const { Option } = Select;
const AddNewStudioModal = ({ openAddModal, setOpenAddModal }) => {
    const { data: studios, refetch } = useGetStudioListQuery();
    const [fileList, setFileList] = useState(null);
    const [fileName, setFileName] = useState("");
    const [form] = Form.useForm();



const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
    { value: 'watermelon', label: 'Watermelon' },
  ];

    useEffect(() => {
        if (openAddModal) {
            form.resetFields();
            setFileList(null);
            setFileName("");
        }
    }, [openAddModal, form]);
    // handle add new stadio
    const onFinish = async (values) => {
        const formData = new FormData();
        formData.append("name", values?.studio);
        formData.append("logo", fileList);
        formData.append("description", values?.description);


        axios.post('http://192.168.10.25:7000/studio/create-studio', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
            .then((res) => {
                if (res?.data?.success) {
                    toast.success(res?.data?.message)
                }
                refetch()
            })
            .catch((err) => toast.error(err?.response?.data?.message));

        setOpenAddModal(false);
        setFileName("");
    };



    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFileList(selectedFile);
        setFileName(selectedFile.name);
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
                                {/* <Input placeholder="Enter Studio Name " className='py-2' variant="filled" /> */}
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a fruit"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option?.children.toLowerCase().includes(input.toLowerCase())
                                    }
                                >
                                    {options.map(opt => (
                                        <Option key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <div className="flex flex-col items-center">

                                <div className="relative w-full">
                                    <label
                                        htmlFor="pdfFile"
                                        className="flex items-center justify-center w-full h-32 mb-2  bg-[#343944]  rounded-lg cursor-pointer  focus:outline-none focus:ring-2 "
                                    >

                                        <IoMdImage className='text-white' size={25} />

                                        <span className="text-gray-500 ml-2">
                                            {fileName ? fileName : "Click to Upload"}
                                        </span>
                                    </label>
                                    <input
                                        type="file"
                                        id="pdfFile"
                                        onChange={handleFileChange}
                                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                                        required
                                    />
                                </div>
                            </div>
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