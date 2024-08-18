import { Button, Checkbox, Form, Input } from "antd"
import { Link } from "react-router-dom"

const Login = () => {

    // Form value
    const onFinish = (values) => {
        console.log(values)        
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
                            style={{ display: "block", marginBottom: "5px" , color: '#6D6D6D'}}
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
                            style={{ display: "block", marginBottom: "5px",  color: '#6D6D6D' }}
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
                            <Checkbox  className=" text-[#6D6D6D]">Remember me</Checkbox>
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
                            <Link
                                className="login-form-forgot  "
                                style={{ color: "white" }}
                                to="/"
                            >
                                Sign In
                            </Link>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login