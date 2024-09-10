
import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { useResetPasswordMutation } from "../../redux/api/usersApi";
import { toast } from "sonner";

const UpdatePassword = () => {
    const navigate = useNavigate();
    const [resetPassword] = useResetPasswordMutation()
    const [newPassError, setNewPassError] = useState("");
    const [conPassError, setConPassError] = useState("");
    const onFinish =(values)=>{
        const data ={
            "password": values?.password,
            "confirm_password": values?.confirmPassword
        }
        resetPassword(data).unwrap()
        .then((payload) =>{
          toast.success("Password reset successfylly")
          navigate('/auth/login')
          localStorage.removeItem('email')
        })
        .catch((error) => {
          toast.error(error?.data?.message)
        })

    }
    
    return (
        <div
            style={{
                width: "100%",
                background: "#07090D",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                style={{ width: "630px", background: "#343944", padding: "90px 57px" }}
                onFinish={onFinish}
            >
                <h1 style={{ fontSize: "32px", color: "#EBEBEB", marginBottom: "13px", textAlign: "center", fontWeight: "bold" }}>Set a new password</h1>
                <p style={{ width: "295px", color: "#EBEBEB", fontSize: "14px", fontWeight: 400, textAlign: "center", margin: "0 auto 0 auto" }}>
                Create a new password. Ensure it differs from
                previous ones for security.
                </p>

                <div style={{ margin: "45px 0 20px 0" }}>
                    <label style={{ display: "block", color: "#38393E", marginBottom: "5px" }} htmlFor="">New Password</label>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your new Password!",
                            },
                        ]}
                        style={{ marginBottom: 0 }}
                    >
                        <Input.Password
                            type="password"
                            placeholder="Enter New password"
                            style={{
                                border: "1px solid #E0E4EC",
                                height: "52px",
                                background: "white",
                                borderRadius: "8px",
                                outline: "none",
                            }}
                        />
                    </Form.Item>
                    {newPassError && <label style={{ display: "block", color: "red" }} htmlFor="error">{newPassError}</label>}
                </div>

                <div style={{ marginBottom: "40px" }}>
                    <label style={{ display: "block", color: "#38393E", marginBottom: "5px" }} htmlFor="email">Confirm Password</label>
                    <Form.Item
                        style={{ marginBottom: 0 }}
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Confirm Password!",
                            },
                        ]}
                    >
                        <Input.Password
                            type="password"
                            placeholder="Enter Confirm password"
                            style={{
                                border: "1px solid #E0E4EC",
                                height: "52px",
                                background: "white",
                                borderRadius: "8px",
                                outline: "none",
                            }}
                        />
                    </Form.Item>
                    {conPassError && <label style={{ display: "block", color: "red" }} htmlFor="error">{conPassError}</label>}
                </div>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        style={{
                            border: "none",
                            height: "51px",
                            background: "#141A26",
                            color: "white",
                            borderRadius: "8px",
                            outline: "none",
                            
                        }}
                    >

                        
                            Update
                        
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default UpdatePassword;
