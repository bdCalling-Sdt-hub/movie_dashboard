import { Outlet, useNavigate } from 'react-router-dom';
import { Sidebar } from '../Components/Shared/Sidebar';
import { useGetUserQuery } from '../redux/api/usersApi';
import { imgURL } from '../redux/api/baseApi';


const siderStyle = {
    textAlign: 'center',
    lineHeight: '50px',
    color: '#fff',
    backgroundColor: '#07090D',
};

const Layouts = () => {
    const { data: getUser } = useGetUserQuery()
    const navigate = useNavigate()
 console.log(getUser?.data);
    return (

        <div className='flex justify-between items-center gap-0  '>

            <div style={siderStyle} className='w-[330px] pt-10 bg-[#07090D]  h-screen overflow-y-scroll  '>
                <Sidebar />
            </div>

            <div className=' w-full h-screen bg-[#141A26] overflow-y-scroll'>
                <div className='bg-[#07090D] h-[70px] '>
                    <div className='flex items-center w-full justify-end gap-2 h-full pr-10'>
                        <img  onClick={() => navigate('/profile')} src={`${imgURL}${getUser?.data?.img}`} className='h-10 w-10 border-2  border-purple-600 object-cover  rounded-full cursor-pointer hover:scale-110 transition-all' alt="" />
                        <h1 className='text-white uppercase '>{getUser?.data?.name}</h1>
                    </div>
                </div>
                <div className='p-5 text-white'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layouts