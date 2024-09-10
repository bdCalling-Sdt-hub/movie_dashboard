import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { CiEdit } from "react-icons/ci";
import { useChangePasswordMutation, useGetUserQuery, useUpdateUserProfileMutation } from "../../redux/api/usersApi";
import { imgURL } from "../../redux/api/baseApi";
import { FaRegUser } from "react-icons/fa";
import { toast } from "sonner";

const admin = false;
const Profile = () => {
    const { data: getUser } = useGetUserQuery()
    const [updateUserProfile] = useUpdateUserProfileMutation()
    const [changePassword] =  useChangePasswordMutation()
    const [image, setImage] = useState();
    const [form] = Form.useForm()
    const [tab, setTab] = useState(new URLSearchParams(window.location.search).get('tab') || "Profile");
    const [passError, setPassError] = useState('')


    useEffect(() => {
        if (getUser?.data) {
            form.setFieldsValue({
                fullName: getUser?.data?.name,
                mobileNumber: getUser?.data?.phone,
                address: getUser?.data?.address,
                email: getUser?.data?.email
            });
        }
    }, [getUser, form]);
    const handlePageChange = (tab) => {
        setTab(tab);
        const params = new URLSearchParams(window.location.search);
        params.set('tab', tab);
        window.history.pushState(null, "", `?${params.toString()}`);
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        setImage(file)

    }

    /** update password function */
    const onFinish = (values) => {
        changePassword(values).unwrap()
        .then((payload) =>  toast.success(payload?.message))
        .catch((error) => toast.error(error?.data?.message));
    };
    const onEditProfile = (values) => {
        const data = {
            // profile_image: image,
            name: values.fullName,
            contact: values.mobileNumber,
            address: values.address
        }
        if(image){
            data.img = image
        }
        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }
       
        updateUserProfile(formData).unwrap()
            .then((payload) => toast.success(payload?.message))
            .catch((error) => toast.error(error?.data?.message));

    }

    return (
        <div>

            <div className='container pb-16'>

                <div className='bg-base py-5 px-10 rounded flex items-center justify-center flex-col gap-6'>
                    <div className='relative w-[140px] h-[124px] mx-auto'>
                        <input type="file" onInput={handleChange} id='img' style={{ display: "none" }} />
                        

                        <img
                            style={{ width: 140, height: 140, borderRadius: "100%" }}
                            src={image ? URL.createObjectURL(image) : getUser?.data?.img ? `${imgURL}${getUser?.data?.img}` : <FaRegUser />}
                            alt=""
                        />

                        {
                            tab === "Profile" && <label
                                htmlFor="img"
                                className='
                            absolute top-1/2 -right-2
                            bg-white
                            rounded-full
                            w-6 h-6
                            flex items-center justify-center
                            cursor-pointer
                        '
                            >
                                <CiEdit color='#929394' />
                            </label>
                        }

                    </div>
                    <div className='w-fit'>
                        <p className=' text-[#575757] text-[24px] leading-[32px] font-semibold  '>{`Mr. Admin`}</p>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-6 ">
                    <p
                        onClick={() => handlePageChange("Profile")}
                        className={`
                        ${tab === "Profile" ? "border-white border-b-2 font-semibold text-white" : "border-b-2 border-transparent font-normal text-gray-600"}
                        pb-2 cursor-pointer text-[16px] leading-5  
                    `}
                    >
                        Edit Profile
                    </p>
                    <p
                        onClick={() => handlePageChange("Change Password")}
                        className={`
                        ${tab === "Change Password" ? "border-white border-b-2 font-semibold text-white" : "border-b-2 border-transparent font-normal  text-gray-600"}
                        pb-2 cursor-pointer text-base leading-[18px]  
                    `}
                    >
                        Change Password
                    </p>
                </div>
                {
                    tab === "Profile"
                        ?
                        <div
                            className='max-w-[480px] mx-auto rounded-lg p-6'

                        >
                            <h1 className='text-center text-secondary leading-7 text-2xl font-medium mb-7'>Edit
                                Profile</h1>
                            <Form
                                onFinish={onEditProfile}
                                layout="vertical"
                                form={form}
                            >
                                <div className="flex items-center justify-between w-full " >
                                    <Form.Item
                                        name="fullName"
                                        label={<p className="text-[#919191] text-[16px] leading-5 font-normal">User
                                            Name</p>}
                                    >
                                        <Input
                                            style={{
                                                width: "100%",
                                                height: 40,
                                                border: "none",
                                                borderRadius: "8px",
                                                color: "#919191",
                                                backgroundColor: "#343944",
                                                outline: "none"
                                            }}
                                            className='text-[16px] leading-5 '
                                            placeholder="name123"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="email"
                                        label={<p className="text-[#919191] text-[16px] leading-5 font-normal">Email</p>}
                                    >
                                        <Input
                                            style={{
                                                width: "100%",
                                                height: 40,
                                                border: "none",
                                                backgroundColor: "#343944",
                                                borderRadius: "8px",
                                                color: "#919191",
                                                outline: "none"
                                            }}
                                            className='text-[16px] leading-5'
                                            placeholder={`xyz@gmail.com`}
                                            readOnly
                                        />
                                    </Form.Item>
                                </div>

                                <div className="flex justify-between">
                                    <Form.Item
                                        name="mobileNumber"
                                        label={<p className="text-[#919191] text-[16px] leading-5 font-normal">Contact
                                            no</p>}
                                    >
                                        <Input
                                            style={{
                                                width: "100%",
                                                height: 48,
                                                backgroundColor: "#343944",
                                                border: "none",
                                                borderRadius: "8px",
                                                color: "#919191",
                                                outline: "none"
                                            }}
                                            className='text-[16px] leading-5'
                                            placeholder="+9900700007"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="address"
                                        label={<p className="text-[#919191] text-[16px] leading-5 font-normal">Address</p>}
                                    >
                                        <Input
                                            style={{
                                                width: "100%",
                                                height: 48,
                                                backgroundColor: "#343944",
                                                border: "none",
                                                borderRadius: "8px",
                                                color: "#919191",
                                                outline: "none"
                                            }}
                                            className='text-[16px] leading-5'
                                            placeholder="79/A Joker Vila, Gotham City"
                                        />
                                    </Form.Item>
                                </div>

                                <Form.Item
                                    style={{
                                        marginBottom: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        block
                                        style={{
                                            width: 197,
                                            height: 48,
                                            color: "#FCFCFC",
                                            background: '#6200AF'

                                        }}
                                        className='font-normal text-[16px] leading-6 bg-primary rounded-full'
                                    >
                                        Save & Changes
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                        :
                        <div
                            className='max-w-[481px] mx-auto rounded-lg p-6'

                        >
                            <h1 className='text-center text-secondary leading-7 text-2xl font-medium mb-7'>Edit Your Profile</h1>
                            <Form
                                layout='vertical'
                                onFinish={onFinish}
                                form={form}
                            >
                                <Form.Item
                                    name="old_Password"
                                    label={<p className="text-[#415D71] text-sm leading-5 poppins-semibold">Current
                                        Password</p>}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please Enter Current Password!"
                                        }
                                    ]}
                                >
                                    <Input.Password
                                        style={{
                                            width: "100%",
                                            height: "42px",
                                            border: "none",
                                            backgroundColor: "#343944",
                                            borderRadius: "8px",
                                            color: "black",
                                            outline: "none",

                                        }}
                                        type="text"
                                        placeholder="***************"
                                    />
                                </Form.Item>


                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please Enter New Password!"
                                        }
                                    ]}
                                    label={<p className="text-[#415D71] text-sm leading-5 poppins-semibold">New
                                        Password</p>}
                                >
                                    <Input.Password
                                        style={{
                                            width: "100%",
                                            height: "42px",
                                            border: "none",
                                            backgroundColor: "#343944",
                                            borderRadius: "8px",
                                            color: "black",
                                            outline: "none",

                                        }}
                                        type="text"
                                        placeholder="************"
                                    />
                                </Form.Item>

                                <Form.Item
                                    label={<p className="text-[#415D71] text-sm leading-5 poppins-semibold">Confirm
                                        Password</p>}
                                    name="confirm_password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please Enter Confirm Password!"
                                        }
                                    ]}
                                >
                                    <Input.Password
                                        style={{
                                            width: "100%",
                                            height: "42px",
                                            border: "none",
                                            backgroundColor: "#343944",
                                            borderRadius: "8px",
                                            color: "black",
                                            outline: "none",

                                        }}
                                        type="text"
                                        placeholder="***************"
                                    />
                                </Form.Item>
                                {passError && <p className="text-red-600 -mt-4 mb-2">{passError}</p>}
                                <Form.Item
                                    style={{
                                        marginBottom: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        block
                                        style={{
                                            width: 197,
                                            height: 48,
                                            color: "#FFFFFF",
                                            background: '#6200AF'
                                        }}
                                        className='font-normal text-[16px] leading-6 bg-primary rounded-full'
                                    >
                                        Save Changes
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                }
            </div>
        </div>
    );
};

export default Profile;