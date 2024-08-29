import { Button, Card, Checkbox, Col, Row } from 'antd';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const EditMovieDetails = () => {
    const shows = [
        {
            title: 'The Crown',
            image: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg', // Replace with actual image path
        },
        {
            title: 'The Terminator',
            image: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
        },
        {
            title: 'The Dark Knight',
            image: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
        },
        {
            title: 'The Dark Knight',
            image: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
        },
        {
            title: 'The Dark Knight',
            image: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
        },
        {
            title: 'The Dark Knight',
            image: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
        },
        {
            title: 'The Dark Knight',
            image: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
        },
        {
            title: 'The Dark Knight',
            image: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
        },
        // Add more shows as needed
    ];
    return (
        <div className='m-5 bg-[#343944] rounded-md p-5'>
            <div className='flex gap-5 items-center font-semibold text-[24px] '>
                <FaArrowLeft className='cursor-pointer' size={20} />
                <p className=''>Edit Movie Details</p>
            </div>
            <div className='flex items-center gap-1 mt-4 bg-[#1F1E20] w-[10%] py-2 justify-center rounded-sm'>
                <img className='h-10 w-10 rounded-full' src="https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg" alt="" />
                <p>Prime Video</p>
            </div>



            <div className="grid grid-cols-4 py-10">
                {
                    shows.map((show, i) => (
                        <div key={i} className='flex items-center gap-2 py-2 my-4 '>
                            <Checkbox className="checkbox-style bg-" />
                            <img src="https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg" alt="" className="show-image h-10 w-10 rounded-full" />
                            <p className='text-[20px]'>The Dark Knight</p>
                        </div>
                    ))
                }

                {/* <Row gutter={[16, 16]} justify="center">
                    {shows.map((show, index) => (
                        <Col span={4} key={index} className="show-col">
                            <Card className="show-card">
                                
                                <img src={show.image} alt={show.title} className="show-image" />
                                <div className="show-title">{show.title}</div>
                            </Card>
                        </Col>
                    ))}
                </Row> */}
            </div>
        </div>
    )
}

export default EditMovieDetails