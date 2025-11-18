import React, { useState } from 'react'
import patientIcon from '../../assets/patients_icon.svg'
const AllAppoinments = () => {
  const initialAppointments = [
    { patient: 'John Doe', department: 'Cardiology', age: 45, datetime: '2025-11-18 09:30', doctor: 'Dr. Ava Patel', fees: '$120' },
    { patient: 'Maria Gomez', department: 'Dermatology', age: 33, datetime: '2025-11-18 10:00', doctor: 'Dr. Mateo Garcia', fees: '$80' },
    { patient: 'Samuel Lee', department: 'Orthopedics', age: 52, datetime: '2025-11-18 10:30', doctor: 'Dr. Priya Sharma', fees: '$150' },
    { patient: 'Fatima Khan', department: 'Pediatrics', age: 7, datetime: '2025-11-18 11:00', doctor: 'Dr. Oliver Smith', fees: '$60' },
    { patient: 'Olivia Brown', department: 'Neurology', age: 29, datetime: '2025-11-18 11:30', doctor: 'Dr. Sofia Rossi', fees: '$200' }
  ]

  const [appointments] = useState(initialAppointments)

  return (
    <div className='overflow-y-auto h-screen p-6'>
      <h2 className='text-2xl font-semibold mb-4'>All Appoinments</h2>

      <div className='bg-white border border-gray-200 rounded-lg shadow-sm overflow-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr className='text-sm text-gray-700'>
              <th className='py-3 px-4 text-left'>#</th>
              <th className='py-3 px-4 text-left'>Patient</th>
              <th className='py-3 px-4 text-left'>Department</th>
              <th className='py-3 px-4 text-left'>Age</th>
              <th className='py-3 px-4 text-left'>Date &amp; Time</th>
              <th className='py-3 px-4 text-left'>Doctor</th>
              <th className='py-3 px-4 text-left'>Fees</th>
              <th className='py-3 px-4 text-left'></th>
            </tr>
          </thead>
          <tbody className='bg-white text-sm'>
            {appointments.map((a, idx) => (
              <tr key={idx} className='h-18 border-b border-gray-300 text-[#696B80] cursor-pointer hover:bg-gray-100'>
                <td className='py-3 px-4'>{idx + 1}</td>
                <td className='flex items-center gap-4 py-3 px-4'><img className='h-15 w-15' src = {patientIcon}/>{a.patient}</td>
                <td className='py-3 px-4'>{a.department}</td>
                <td className='py-3 px-4'>{a.age}</td>
                <td className='py-3 px-4'>{a.datetime}</td>
                <td className='py-3 px-4'>{a.doctor}</td>
                <td className='py-3 px-4'>{a.fees}</td>
                <td className='py-3 px-4'>
                  <button className='text-sm text-red-600 cursor-pointer hover:underline'>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllAppoinments