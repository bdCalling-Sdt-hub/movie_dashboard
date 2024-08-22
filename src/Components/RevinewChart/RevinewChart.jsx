import React, { PureComponent } from 'react';
import { BiSolidSquareRounded } from 'react-icons/bi';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const RevinewChart = () => {
    const data = [
        {
            uv: 4000,
            pv: 2400,
        },
        {
            uv: 3000,
            pv: 1398,
        },
        {
            uv: 2000,
            pv: 9800,
        },
        {
            uv: 2780,
            pv: 3908,
        },
        {
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            uv: 2390,
            pv: 3800,
        },
        {
            uv: 3490,
            pv: 4300,
        },
    ];

    return (
        <div className='pt-5 bg-[#343944] p-2 rounded-md px-10'>
            <div className='flex items-center gap-5 py-5'>
                <h1 className='font-bold text-xl '>Growth</h1>
                    <p className='flex items-center gap-2 '> <BiSolidSquareRounded className='text-[#4B92E5]' /> User Growth</p>
                    <p className='flex items-center gap-2 '>  <BiSolidSquareRounded className='text-[#CEB0E6]' /> Add Revenue</p>
            </div>
            <div className='h-[500px] w-[100%]' >
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="pv" stackId="1" stroke="#4B92E5" fill="#4B92E5" />
                        <Area type="monotone" dataKey="uv" stackId="1" stroke="#CEB0E6" fill="#CEB0E6" />
                        {/* <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" /> */}
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default RevinewChart