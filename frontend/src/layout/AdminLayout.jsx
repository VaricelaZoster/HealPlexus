import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'
import Sidebar from '../components/Sidebar'

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <AdminNavbar />

      <div className="flex flex-1 overflow-hidden">
        <div className="w-60 flex">
          <Sidebar />
        </div>


        <div className="flex-1 overflow-y-auto bg-white p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
