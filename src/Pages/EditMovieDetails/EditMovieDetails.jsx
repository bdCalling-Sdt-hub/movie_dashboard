import { Button, Card, Checkbox, Col, Input, Row } from 'antd';
import Search from 'antd/es/input/Search';
import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const EditMovieDetails = () => {

    const [selectCard, setSelectCard] = useState(null)
    const handleSelectCard = (cardId) => {
        console.log(cardId)
    }
    const shows = [
        {
            id : 1,
            title: 'The Crown',
            image: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg', // Replace with actual image path
        },
        {
            id : 2,
            title: 'The Terminator',
            image: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
        },
        {
            id : 3,
            title: 'The Dark Knight',
            image: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
        },
        {
            id : 4,
            title: 'The Dark Knight',
            image: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
        },
        {
            id : 5,
            title: 'The Dark Knight',
            image: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
        },
        {
            id : 6,
            title: 'The Dark Knight',
            image: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
        },
        {
            id : 7,
            title: 'The Dark Knight',
            image: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
        },
        {
            id : 8,
            title: 'The Dark Knight',
            image: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
        },
        // Add more shows as needed
    ];
    return (
        <div className='m-5 bg-[#343944] rounded-md p-5'>
            <div className='flex gap-5 items-center font-semibold text-[24px] '>
                <Link to={-1}><FaArrowLeft className='cursor-pointer' size={20} /></Link>
                <p className=''>Edit Movie Details</p>
            </div>
            <div className='flex items-center gap-1 mt-4 bg-[#1F1E20] w-[10%] py-2 justify-center rounded-sm'>
                <img className='h-10 w-10 rounded-full' src="https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg" alt="" />
                <p>Prime Video</p>
            </div>


            <div className='flex justify-between items-center mt-5'>
                <h1>Select Movie</h1>
                <Input suffix={<SearchOutlined className='text-white' />} placeholder='Search here' className='custom-input w-[30%] bg-[#343944] hover:bg-[#343944] rounded-full' />
            </div>
            <div className="grid grid-cols-4 py-10">
                {
                    shows.map((show, i) => (
                        <div key={i} className='flex items-center gap-2 py-2 my-4 '>
                            <Checkbox className="checkbox-style " />
                            <img src="https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg" alt="" className="show-image h-10 w-10 rounded-full" />
                            <p className='text-[20px]'>The Dark Knight</p>
                        </div>
                    ))
                }

                {/* {['1', '2', '3'].map((cardId) => (
                    <Card
                        key={cardId}
                        style={{
                            width: 300,
                            border: selectCard === cardId ? '2px solid #1890ff' : '1px solid #d9d9d9',
                            position: 'relative', 
                            cursor: 'pointer',
                        }}
                        onClick={() => handleSelectCard(cardId)}
                    >
                        {selectCard === cardId && (
                            <CheckCircleTwoTone
                                twoToneColor="#1890ff"
                                style={{ position: 'absolute', top: 8, right: 8, fontSize: '24px' }}
                            />
                        )}
                        <Card.Meta title={`Card ${cardId}`} description={`This is the description of card ${cardId}.`} />
                    </Card>
                ))} */}

            </div>
        </div>
    )
}

export default EditMovieDetails