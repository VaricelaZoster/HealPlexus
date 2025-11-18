import React from 'react'
import Tile from '../../components/doctorComponents/Tile'
import doctor_img from '../../assets/doctor.png'

const DoctorsList = () => {

  const doctors = [
    { name: 'Dr. Ava Patel', specialty: 'Cardiology', image: doctor_img},
    { name: 'Dr. Liam Smith', specialty: 'Neurology', image: doctor_img},
    { name: 'Dr. Sophia Johnson', specialty: 'Pediatrics' ,image: doctor_img},
    { name: 'Dr. Ethan Brown', specialty: 'Orthopedics',image: doctor_img },
    { name: 'Dr. Isabella Garcia', specialty: 'Dermatology', image: doctor_img },
    { name: 'Dr. Mason Martinez', specialty: 'General Surgery', image: doctor_img },
  ]
  return (
    <div>
      <div className='text-2xl font-semibold mb-4'>All Doctors</div>
      <div><Tile doctors={doctors} /></div>
    </div>
  )
}

export default DoctorsList