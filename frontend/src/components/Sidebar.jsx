import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const items = [
    { label: 'Dashboard', path: "/admin/dashboard" },
    { label: 'Appoinments', path: "/admin/allAppoinments" },
    { label: 'Add Doctor', path: "/admin/addDoctor" },
    { label: 'Doctors List', path: "/admin/DoctorsList" }
  ]
  
  const handleKey = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActiveIndex(idx)
    }
  }
  
  return (
  <div className='flex flex-col items-center pt-7 gap-1 fixed w-60 border-r border-gray-300 h-svh'>
      {items.map((item, idx) => {
        const isActive = idx === activeIndex
        const bgClass = isActive ? 'bg-[#d9d9fe]' : 'bg-white hover:bg-[#f7f7fe]'
        return (
          <div className='flex w-full'>
            <Link
            key={item.label}
            to={item.path}
            role='button'
            tabIndex={0}
            onClick={() => setActiveIndex(idx)}
            onKeyDown={(e) => handleKey(e, idx)}
            className={`flex items-center pl-5 w-full h-13 cursor-pointer text-center ${bgClass}`}
            aria-pressed={isActive}
            >
            {item.label}
            </Link>
            {isActive && (
                <div className='bg-[#845fff] w-2'/>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar