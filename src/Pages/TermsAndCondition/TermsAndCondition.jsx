
import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';
import { useGetTermsQuery, usePostTermsMutation } from '../../redux/api/usersApi';
import { toast } from 'sonner';
const TermsAndCondition = () => {
    const { data: getTerms } = useGetTermsQuery()
    const [postTerms] = usePostTermsMutation();
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [isLoading, seLoading] = useState(false)
    const handleTerms = () => {
        console.log(content)
        const data = {
            name: 'Terms',
            value: content
        }
        postTerms(data).unwrap()
            .then((payload) =>  toast.success(payload?.message))
            .catch((error) => toast.error('Something Went wrong'));
    }
    const config = {
        readonly: false,
        placeholder: 'Start typings...',
        style: {
            height: 400,
        },
        buttons: [
            'image', 'fontsize', 'bold', 'italic', 'underline', '|',
            'font', 'brush',
            'align'
        ]
    }
    return (
        <>
            <div className='flex justify-start items-center gap-2 mb-3 relative m-5'>
                <div className='absolute top-6 left-2 flex items-center'>
                    <Link to={-1} className='py-1 px-2 rounded-md flex justify-start items-center gap-1  '><IoArrowBackSharp /></Link> <p>Terms & Conditions</p>
                </div>
            </div>

            <div className="custom-jodit-editor mx-10 ">
                <JoditEditor
                    ref={editor}
                    value={getTerms?.data?.value}
                    config={config}
                    tabIndex={1}
                    onBlur={newContent => setContent(newContent)}
                    onChange={newContent => { }}
                />
                <div className='flex items-center   justify-center'>
                    <button className='bg-[#6200AF] px-4 py-2 rounded-full' onClick={handleTerms} >Save Changes</button>
                </div>

            </div>
        </>
    )
}

export default TermsAndCondition
