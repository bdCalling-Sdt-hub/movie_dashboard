import React from 'react';
import { useGetAllUserQuery } from '../../redux/api/studioApi';
import { Space, Table } from 'antd';
import { imgURL } from '../../redux/api/baseApi';

const AllUsers = () => {
    const { data: getAllUser } = useGetAllUserQuery({ page: 1 })
    const formattedData = getAllUser?.data?.map((user, i) => (
        {
            serial: i + 1,
            user: user?.name,
            img: user?.img,
            email : user?.email,
            subscription : user?.subscription ? "Premium" : "Free"
        }
    ))
    console.log(getAllUser);
    const columns = [
        {
            title: 'Serial No.',
            dataIndex: 'serial',
            key: 'serial',
        },
        {
            title: 'Users',
            dataIndex: 'user',
            key: 'user',
            render: (_, record) => {
                console.log(record);
                return (
                    <div className='flex items-center gap-2 '>
                        <img src={`${imgURL}${record.img}`} alt={record.name} style={{ width: 30, height: 30, borderRadius: '50%' }} />
                        <p>{record?.user}</p>
                    </div>
                )
            }
            // render: (_,record) => (
            //     <Space>
            //         {/* <img src={user.img} alt={user.name} style={{ width: 30, height: 30, borderRadius: '50%' }} /> */}
            //         <span>{record.name}</span>
            //     </Space>
            // ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            align: "email"
        },
        {
            title: 'Subscription',
            dataIndex: 'subscription',
            key: 'subscription',
            align: "subscription",

        },

    ];

    return (
        <div className='py-5'>
            <Table
                columns={columns}
                dataSource={formattedData}
                pagination={{
                    pageSizeOptions: 5,
                    showTotal: (total, range) => ` ${range[0]}-${range[1]} of ${total}`,
                    locale: {
                        items_per_page: '',
                        prev_page: 'Previous',
                        next_page: 'Next',
                    },
                }}
                rowClassName="custom-row"
                className="custom-table"
            />
        </div>
    );
}

export default AllUsers;
