import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const items = [
    { label: 'Dashboard', path: "/admin/dashboard" },
    { label: 'Appoinments', path: "/admin/allAppoinments" },
    { label: 'Add Doctor', path: "/admin/addDoctor" },
    { label: 'Doctors List', path: "/admin/DoctorsList" },
    { label: 'Patients List', path: "/admin/patientsList" },
  ]
  
  const handleKey = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActiveIndex(idx)
    }
  }

  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname || ''
    const idx = items.findIndex(i => pathname === i.path || pathname.startsWith(i.path))
    if (idx !== -1) setActiveIndex(idx)
  }, [location.pathname])
  
  return (
  <div className='flex flex-col items-center pt-7 gap-1 fixed w-60 border-r border-gray-300 h-svh'>
      {items.map((item, idx) => {
        const isActive = idx === activeIndex
        const bgClass = isActive ? 'bg-[#d9d9fe]' : 'bg-white hover:bg-[#f7f7fe]'
        return (
          <div className='flex w-full' key={item.label}>
            <Link
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