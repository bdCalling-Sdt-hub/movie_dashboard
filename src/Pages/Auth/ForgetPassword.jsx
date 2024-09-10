import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useForgetAdminPasswordMutation } from '../../redux/api/usersApi'
import { toast } from 'sonner'

const ForgetPassword = () => {
    const navigate = useNavigate()
    const [adminForgetPassword] = useForgetAdminPasswordMutation()
    // Handle form data for forget password
    const onFinish = (values) => {

        localStorage.setItem("email", values.email)
        const email = {
            "email": values.email
        }
        adminForgetPassword(email).unwrap()
            .then((payload) => {
                console.log(payload);
                toast.success(payload?.message)
                navigate("/auth/otp")
            })
            .catch((error) =>{
                console.log(error);
                toast.error(error?.data?.message);
            });
    }
    return (
        <div className="flex justify-center items-center gap-0  bg-[#141A26]"
            style={{
                width: "100%",
                height: "100vh",
            }}
        >
            <div className="  flex justify-center items-center">
                <Form
                    name="normal_login"

                    className="password-form bg-[#343944]"
                    initialValues={{
                        remember: true,
                    }}
                    style={{ width: "630px", borderRadius: "12px", padding: "90px 57px" }}

                    onFinish={onFinish}
                >
                    <h1 style={{ fontSize: "32px", marginBottom: "54px", color: "#555555", textAlign: "center" }}>Forgot Password</h1>

                    <div style={{ marginBottom: "24px" }}>
                        <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }} className='text-[#EBEBEB]'> Email Address</label>
                        <Form.Item
                            name="email"
                            id="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your email!",
                                },
                            ]}
                        >
                            <Input
                                placeholder="esteban_schiller@gmail.com"
                                type="email"
                                style={{
                                    border: "1px solid #E0E4EC",
                                    height: "52px",
                                    background: "white",
                                    borderRadius: "8px",
                                    outline: "none",
                                }}

                            />
                        </Form.Item>
                    </div>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="bg-[#141A26] border-none shadow-none"
                            block
                            style={{
                                height: "45px",
                                fontWeight: "400px",
                                fontSize: "18px",
                                background: "#141A26",
                                color: "white",
                                alignSelf: "bottom",
                                marginTop: "30px",
                            }}
                        >
                           
                                Send a Code

                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default ForgetPassword