import React from 'react'
import doctorIcon from '../../assets/doctor_icon.svg'
import appointmentIcon from '../../assets/appointments_icon.svg'
import patientIcon from '../../assets/patients_icon.svg'

const Glance = () => {
  return (
    <div className='flex gap-3'>
        <div className='flex items-center bg-white h-27 w-58 p-2 gap-2 rounded-lg border-2 border-gray-300'>
          <div className=''><img src={doctorIcon} alt="Doctor icon" className="h-[66px] w-[78px]"/></div>
          <div>
            <div className='font-bold text-xl text-[#515151]'>14</div>
            <div className='text-[#8893B0]'>Doctors</div>
          </div>
        </div>
        <div className='flex items-center bg-white h-27 w-58 p-2 rounded-lg border-2 border-gray-300'>
          <div className=''><img src={appointmentIcon} alt="Appointment icon" className="h-[66px] w-[78px]"/></div>
          <div>
            <div className='font-bold text-xl text-[#515151]'>2</div>
            <div className='text-[#8893B0]'>Appoinments</div>
          </div>
        </div>
        <div className='flex items-center bg-white h-27 w-58 p-2 rounded-lg border-2 border-gray-300'>
          <div className=''><img src={patientIcon} alt="Patient icon" className="h-[66px] w-[78px]"/></div>
          <div>
            <div className='font-bold text-xl text-[#515151]'>9</div>
            <div className='text-[#8893B0]'>Patients</div>
          </div>
        </div>
    </div>
  )
}

export default Glance