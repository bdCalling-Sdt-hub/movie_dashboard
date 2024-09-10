import { NavLink, useLocation } from 'react-router-dom'
import dash from '../../assets/Images/dash.png'
import studio from '../../assets/Images/studio.png'
import setting from '../../assets/Images/setting.png'
import movie from '../../assets/Images/movie.png'
import { useEffect, useRef, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { RiLogoutBoxLine } from 'react-icons/ri'
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
      path: '/add-movies',
      label: 'Add Movies',
      icon: <img src={movie} />,
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
    <div id='sidebar' className='flex flex-col gap-5  mt-10'>
      {
        links?.map((item, index) => {
          const isActive = item.path === pathname;
          const isSubMenuActive = item.sub_menu && item.sub_menu.some(subItem => subItem.path === pathname);
          if (item?.sub_menu) {
            return (
              <div key={index} >
                {isSubMenuActive ? <div className='absolute left-0 mt-1  bg-[#4E008C]  h-[54px] w-2  ' style={{
                  borderRadius: "0 10px 10px 0",
                }}>
                </div> : ""}
                <div onClick={() => toggleAccordion(index)}
                  className={`cursor-pointer flex justify-start mx-10 gap-2 items-center text-white ${isSubMenuActive ? "bg-[#4E008C] " : "bg-[#141A26]"} py-1 px-10  rounded-tr-2xl rounded-br-2xl hover:text-white  text-[16px] mb-5`}
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
                      const isSubItemActive = sub_item.path === pathname;

                      return (
                        <NavLink
                          to={sub_item?.path}
                          key={subIndex}
                          className={`flex justify-start items-center  ${isSubItemActive ? "bg-[#4E008C]  " : ""}  px-10  w-full py-1 cursor-pointer bg-[#141A26] text-white hover:text-white `}
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
                {
                  isActive ? <div className='absolute left-0   bg-[#4E008C]  h-[54px] w-[6px]  ' style={{
                    borderRadius: "0 10px 10px 0",
                  }}>
                  </div> : ""
                }

                <NavLink
                  className={`cursor-pointer flex justify-start mx-10 gap-2 items-center text-white ${isActive ? "bg-[#4E008C]" : "bg-[#141A26]"}  py-1 px-10  rounded-tr-2xl rounded-br-2xl hover:text-white  text-[16px]`}
                  to={item?.path}
                >
                  {item?.icon}
                  {item?.label}
                </NavLink>
              </div>
            )
          }
        })
      }

      <NavLink
        className={`cursor-pointer flex justify-start mx-10 gap-2 mt-40 items-center text-white bg-[#141A26]  py-1 px-10  rounded-tr-2xl rounded-br-2xl hover:text-white  text-[16px]`}
        to={'/auth/login'}
      >
        <RiLogoutBoxLine />
        Log Out
      </NavLink>
    </div >
  )
}
