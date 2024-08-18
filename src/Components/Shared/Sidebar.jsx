import { NavLink, useLocation } from 'react-router-dom'
import dash from '../../assets/Images/dash.png'
import studio from '../../assets/Images/studio.png'
import setting from '../../assets/Images/setting.png'
import { useEffect, useRef, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
export const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const contentRefs = useRef([]);
  const { pathname } = useLocation();







  const links = [
    {
      path: '/',
      label: 'Dashboard',
      icon: <img src={dash} />,
      sub_menu: false
    },
    {
      path: '/studio',
      label: 'Studio',
      icon: <img src={studio} />,
      sub_menu: false
    },
    {
      path: '#',
      label: 'Setting',
      icon: <img src={setting} />,
      sub_menu: [
        {
          path: '/profile',
          label: 'Profile',
          icon: <></>,
        },
        {
          path: '/privacy-policy',
          label: 'Privacy Policy',
          icon: <></>,
        },
        {
          path: '/terms-condition',
          label: 'Terms & Condition',
          icon: <></>,
        }


      ]
    },
  ]


  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      contentRefs.current[openIndex].style.maxHeight = `${contentRefs.current[openIndex].scrollHeight}px`;
    }
    contentRefs.current.forEach((ref, index) => {
      if (ref && index !== openIndex) {
        ref.style.maxHeight = '0px';
      }
    });
  }, [openIndex]);




  return (
    <div id='sidebar' className='flex flex-col gap-5   mt-10'>
      {
        links?.map((item, index) => {
          if (item?.sub_menu) {
            return (
              <div key={index} >
                <div className='absolute left-0 mt-5  bg-[#4E008C]  h-[54px] w-2  ' style={{
                  borderRadius: "0 10px 10px 0",
                }}>
                </div>
                <div onClick={() => toggleAccordion(index)}
                  className={`cursor-pointer flex justify-start mx-10 gap-2 items-center text-white bg-[#4E008C] py-1 px-10  rounded-tr-2xl rounded-br-2xl hover:text-white mt-5 text-[16px] mb-5`}
                >
                  {item?.icon}
                  {item?.label}
                  <IoIosArrowForward />

                </div>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className='accordion-content ml-10 mr-10 overflow-hidden transition-max-height duration-300 ease-in-out cursor-pointer  '
                  style={{
                    maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px'
                  }}
                >
                  {
                    item?.sub_menu?.map((sub_item, subIndex) => {
                      // const isSubItemActive = sub_item.path === pathname;

                      return (
                        <NavLink
                          to={sub_item?.path}
                          key={subIndex}
                          className={`flex justify-start items-center  px-10  w-full py-2 cursor-pointer bg-[#141A26] text-white  `}
                        >
                          {sub_item?.icon}
                          {sub_item?.label}
                        </NavLink>
                      );
                    })
                  }
                </div>


              </div>
            )
          } else {
            return (
              <div key={index} >
                <div className='absolute left-0 mt-5  bg-[#4E008C]  h-[54px] w-2  ' style={{
                  borderRadius: "0 10px 10px 0",
                }}>
                </div>
                <NavLink
                  className={`cursor-pointer flex justify-start mx-10 gap-2 items-center text-white bg-[#4E008C] py-1 px-10  rounded-tr-2xl rounded-br-2xl hover:text-white mt-5 text-[16px]`}
                  to="/"
                >
                  {item?.icon}
                  {item?.label}
                </NavLink>
              </div>
            )
          }
        })
      }

      {/* <NavLink
        className={` cursor-pointer text-white bg-[#4E008C] rounded-tr-2xl rounded-br-2xl hover:text-white text-[16px] `}
        to="/"
      >
        Dashboard
      </NavLink>
      <NavLink
        className={`cursor-pointer text-white bg-[#4E008C] rounded-tr-2xl rounded-br-2xl hover:text-white text-[16px]`}
        to="/"
      >
        Dashboard
      </NavLink> */}

    </div >
  )
}
