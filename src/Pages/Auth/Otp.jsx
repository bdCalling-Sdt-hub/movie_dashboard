import OtpInput from 'react-otp-input';
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Button } from "antd";
import { useForgetAdminPasswordMutation, useVerifyOtpMutation } from '../../redux/api/usersApi';
import { toast } from 'sonner';

const Otp = () => {
    const [adminForgetPassword] = useForgetAdminPasswordMutation()
    const [verifyOtp] = useVerifyOtpMutation()
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [err, setErr] = useState("");
    // const dispatch = useDispatch()
    const handleResendCode = () => {

        const email = {
            "email": localStorage.getItem("email")
        }
        adminForgetPassword(email).unwrap()
            .then((payload) => {
                console.log(payload);
                toast.success(payload?.message)
            })
            .catch((error) => {
                console.log(error);
                toast.error(error?.data?.message);
            });
    }
    const handleVerifyOtp = () => {
        const email = localStorage.getItem("email")
        const verify = {
            "code": otp,
            "email": email
        }
        verifyOtp(verify).unwrap()
            .then((payload) => {
                if(payload?.accessToken){
                    localStorage.setItem('accessToken' , payload?.accessToken)
                }
                toast.success(payload?.message)
                navigate("/auth/update-password")
            })
            .catch((error) => toast.error(error?.data?.message));
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
            <div style={{ width: "630px", background: "#343944", padding: "90px 57px" }}>
                <h1 style={{ fontSize: "32px", color: "#EBEBEB", marginBottom: "13px", textAlign: "center" }}>Check your email</h1>
                <p style={{ width: "380px", color: "#EBEBEB", margin: "0 auto 0 auto" }}>
                    We sent a reset link to <span style={{ color: "#545454" }}> contact@dscode...com </span>
                    enter 6 digit code that mentioned in the email
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "30px", }} className="py-7">
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        inputStyle={{
                            height: "44px",
                            width: "44px",
                            borderRadius: "8px",
                            marginRight: "16px",
                            fontSize: "20px",
                            border: "1px solid #A9A9A9",
                            color: "#2B2A2A",
                            outline: "none"
                        }}
                        renderInput={(props) => <input {...props} />}
                    />
                </div>
                <Button
                    onClick={handleVerifyOtp}
                    block
                    htmlType="submit"
                    style={{
                        height: "52px",
                        fontWeight: "400px",
                        fontSize: "18px",
                        color: "white",
                        background: "#141A26",
                        marginTop: "30px",
                        border: "none",
                        outline: "none",
                        marginBottom: "20px"
                    }}
                >


                    <Link
                        className="login-form-forgot "
                        style={{ color: "#FFF" }}
                        to="/auth/update-password"
                    >
                        Verify
                    </Link>
                </Button>
                <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                    Didn’t receive code?
                    <p onClick={handleResendCode} style={{ color: "#CEB0E6", textDecoration: "underline", cursor: "pointer" }}>Resend </p>
                </p>
            </div>
        </div>
    );
};

export default Otp;