import React from 'react'

const AdminNavbar = () => {
  return (
    <div className='flex top-0 sticky bg-white border-gray-300 border-b items-center px-10 h-18 justify-between'>
        <div>Logo</div>
        <div><button className='bg-blue-400 p-3 px-9 text-white rounded-full'>Login</button></div>
    </div>
  )
}

export default AdminNavbar