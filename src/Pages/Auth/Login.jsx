import { Button, Checkbox, Form, Input } from "antd"
import { Link, useNavigate } from "react-router-dom"
import { useLoginUserMutation } from "../../redux/api/authApi";
import { toast } from "sonner";

const Login = () => {
    const [loginUser, { data, isLoading, isSuccess, isError }] = useLoginUserMutation()
    const navigate = useNavigate()
    
    // Form value
    const onFinish = async (values) => {

        const data = {
            email: values?.email, password: values?.password
        }

        try {
            const res = await loginUser(data).unwrap()
            if(res?.token){
                localStorage.setItem('token', JSON.stringify(res?.token));
                navigate("/");
                toast.success('Logged In Successfully!!')
            }

        } catch (error) {
            toast.error(error?.data?.message)

        }
    };

    return (
        <div
            className=" flex justify-center items-center h-screen bg-[#141A26]"

        >
            <div className=" flex justify-center items-center">
                <Form

                    initialValues={{
                        remember: true,
                    }}
                    style={{
                        width: "630px",
                        background: "#343944",
                        borderRadius: "12px",
                        padding: "90px 57px",
                    }}
                    onFinish={onFinish}
                >
                    <h1
                        style={{ fontSize: "32px", color: "white", textAlign: "center" }}
                    >
                        Login to Account
                    </h1>

                    <p
                        style={{ color: "white", textAlign: "center", marginBottom: "35px" }}
                    >
                        Please enter your email and password to continue
                    </p>
                    <div style={{ marginBottom: "24px" }}>
                        <label
                            htmlFor="email"
                            style={{ display: "block", marginBottom: "5px", color: '#6D6D6D' }}
                        >
                            {" "}
                            Email address:{" "}
                        </label>
                        <Form.Item
                            style={{ marginBottom: 0 }}
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

                    <div style={{ marginBottom: "24px" }}>
                        <label
                            style={{ display: "block", marginBottom: "5px", color: '#6D6D6D' }}
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <Form.Item
                            style={{ marginBottom: 0 }}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Password!",
                                },
                            ]}
                        >
                            <Input.Password
                                type="password"
                                placeholder="************"
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

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox className=" text-[#6D6D6D]">Remember me</Checkbox>
                        </Form.Item>
                        <Link
                            className="login-form-forgot "
                            style={{ color: "white" }}
                            to="/auth/forgot-password"
                        >
                            Forgot Password
                        </Link>
                    </div>

                    <Form.Item style={{ marginBottom: 0 }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className=""
                            block
                            style={{
                                height: "52px",
                                fontWeight: "400px",
                                fontSize: "18px",
                                background: "#141A26",
                                marginTop: "56px",
                            }}
                        >
                            
                                Sign In
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login