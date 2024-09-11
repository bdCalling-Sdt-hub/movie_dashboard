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
        
        <div className='flex justify-between items-center gap-0  '>

            <div style={siderStyle} className='w-[330px] pt-10 bg-[#07090D]  h-screen overflow-y-scroll  '>
                <Sidebar />
            </div>

            <div className=' w-full h-screen bg-[#141A26] overflow-y-scroll'>
                <div className='bg-[#07090D] h-[70px]'>
                    
                </div>
                <div className='p-5 text-white'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layouts