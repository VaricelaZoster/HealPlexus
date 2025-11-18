import React, { useState } from 'react'
import listIcon from '../../assets/list_icon.svg'
import doctorAvatar from '../../assets/profile_img.svg'
import cancelIcon from '../../assets/cancel_icon.svg'

const Latest = () => {

  const initialDoctors = [
    { name: 'Dr. Ava Patel', date: '2025-11-18 09:30' },
    { name: 'Dr. Mateo Garcia', date: '2025-11-18 10:00' },
    { name: 'Dr. Priya Sharma', date: '2025-11-18 10:30' },
    { name: 'Dr. Oliver Smith', date: '2025-11-18 11:00' },
    { name: 'Dr. Sofia Rossi', date: '2025-11-18 11:30' },
    { name: 'Dr. Liam Johnson', date: '2025-11-18 12:00' },
    { name: 'Dr. Chen Wei', date: '2025-11-18 12:30' },
    { name: 'Dr. Amara Okafor', date: '2025-11-18 13:00' }
  ]

  const [doctors, setDoctors] = useState(initialDoctors)

  const handleDelete = (index) => {
    setDoctors(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className='w-[630px]'>
      <div className='flex items-center gap-3 pl-7 bg-white h-[46px] border-2 border-b-0 border-gray-300 rounded-t-lg'>
        <div><img src={listIcon} className='w-6'/></div>
        <div className='text-[18px] font-semibold'>Latest Appoinments</div>
      </div>
      <div className='flex flex-col gap-4 bg-white p-6 border-2 border-gray-300 rounded-b-lg'>
        {doctors.map((item, index) => (
          <div key={index} className='flex justify-between p-1 items-center rounded-md cursor-pointer hover:bg-gray-100'>
            <div className='flex items-center gap-7'>
              <img src={doctorAvatar} alt="doctor avatar" className="h-12 w-12 rounded-full"/>
              <div className='flex flex-col'>
                <div className='font-medium text-[#515151]'>{item.name}</div>
                <div className='text-sm text-[#8893B0]'>Booking on {item.date}</div>
              </div>
            </div>
            <div className='flex items-center justify-center h-12 w-12'>
              <button
                onClick={() => handleDelete(index)}
                aria-label={`Cancel appointment for ${item.name}`}
                className='p-1 rounded-full'
              >
                <img src={cancelIcon} alt="cancel" className="h-8 w-8 cursor-pointer"/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Latest