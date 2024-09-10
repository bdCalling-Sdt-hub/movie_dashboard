import { Flex, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Components/Shared/Sidebar';
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#07090D',
};
const contentStyle = {
   
    color: '#fff',
    backgroundColor: '#141A26',
};
const siderStyle = {
    textAlign: 'center',
    lineHeight: '50px',
    color: '#fff',
    backgroundColor: '#07090D',
};

const Layouts = () => {
    return (
        <Layout style={{ height: "100vh", width: "100vw" }} >
            <Header style={headerStyle}></Header>
            <Layout>
                <Sider width="16%" style={siderStyle}>
                    <Sidebar/>
                </Sider>
                <Content style={contentStyle}><Outlet/></Content>
            </Layout>
        </Layout>
    )
}

export default Layouts