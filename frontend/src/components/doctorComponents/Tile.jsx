import React from 'react'

const Tile = ({ doctors = [] }) => {
  if (!doctors.length) return <div>No doctors available</div>

  console.log(doctors);

  return (
    <div className='grid grid-cols-5 pr-50 gap-6'>
      {doctors.map((doc, idx) => (
        <div key={idx} className='bg-white w-50 rounded-xl border-2 border-gray-100  hover:transition-all cursor-pointer hover:-translate-y-1.5 hover:shadow-xl duration-200 ease-in'>
            <div ><img src={doc.image} className='h-50 w-50 rounded-t-xl'/></div>
            <div className='p-2 px-4'>
                <div className='font-semibold text-[#262626]'>{doc.name}</div>
                <div className='text-[#696B80]'>{doc.specialty}</div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Tile